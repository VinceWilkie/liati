import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 3;
const rateLimitMap = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const timestamps = rateLimitMap.get(ip) ?? [];
    const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);

    if (recent.length >= RATE_LIMIT_MAX_REQUESTS) {
        rateLimitMap.set(ip, recent);
        return true;
    }

    recent.push(now);
    rateLimitMap.set(ip, recent);
    return false;
}

setInterval(() => {
    const now = Date.now();
    for (const [ip, timestamps] of rateLimitMap) {
        const recent = timestamps.filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
        if (recent.length === 0) {
            rateLimitMap.delete(ip);
        } else {
            rateLimitMap.set(ip, recent);
        }
    }
}, 60_000);

export async function POST(request: NextRequest) {
    try {
        const ip = request.headers.get(`x-forwarded-for`)?.split(`,`)[0].trim()
            ?? request.headers.get(`x-real-ip`)
            ?? `unknown`;

        if (isRateLimited(ip)) {
            return NextResponse.json(
                { error: `Too many attempts. Please try again in a minute.` },
                { status: 429 }
            );
        }

        const apiKey = process.env.RESEND_API_KEY;
        const audienceId = process.env.RESEND_AUDIENCE_ID;

        if (!apiKey || !audienceId) {
            console.error(`Missing env vars — RESEND_API_KEY: ${!!apiKey}, RESEND_AUDIENCE_ID: ${!!audienceId}`);
            return NextResponse.json(
                { error: `Service temporarily unavailable.` },
                { status: 503 }
            );
        }

        const resend = new Resend(apiKey);

        const body = await request.json();
        const { email, website } = body;

        if (website) {
            return NextResponse.json(
                { message: `Successfully subscribed!` },
                { status: 200 }
            );
        }

        if (!email || typeof email !== `string`) {
            return NextResponse.json(
                { error: `Email is required` },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: `Please enter a valid email address` },
                { status: 400 }
            );
        }

        const { data: listData, error: listError } = await resend.contacts.list({
            audienceId,
        });

        if (listError) {
            console.error(`Resend list contacts error:`, listError);
            return NextResponse.json(
                { error: `Failed to subscribe. Please try again.` },
                { status: 500 }
            );
        }

        const alreadySubscribed = listData?.data?.some(
            (contact) => contact.email.toLowerCase() === email.toLowerCase()
        );

        if (alreadySubscribed) {
            return NextResponse.json(
                { message: `You've already subscribed, thanks!` },
                { status: 200 }
            );
        }

        const { error: contactError } = await resend.contacts.create({
            email,
            audienceId,
        });

        if (contactError) {
            console.error(`Resend contact error:`, contactError);
            return NextResponse.json(
                { error: `Failed to subscribe. Please try again.` },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { message: `Successfully subscribed!` },
            { status: 200 }
        );
    } catch (error) {
        console.error(`Subscribe error:`, error);
        return NextResponse.json(
            { error: `Something went wrong. Please try again.` },
            { status: 500 }
        );
    }
}
