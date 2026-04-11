import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID!;
const NOTIFICATION_EMAIL = `liati.business@gmail.com`;

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { email } = body;

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

        const { error: contactError } = await resend.contacts.create({
            email,
            audienceId: AUDIENCE_ID,
        });

        if (contactError) {
            if (contactError.message?.toLowerCase().includes(`already exists`)) {
                return NextResponse.json(
                    { error: `This email is already subscribed` },
                    { status: 409 }
                );
            }
            console.error(`Resend contact error:`, contactError);
            return NextResponse.json(
                { error: `Failed to subscribe. Please try again.` },
                { status: 500 }
            );
        }

        await resend.emails.send({
            from: `LIATI Newsletter <onboarding@resend.dev>`,
            to: NOTIFICATION_EMAIL,
            subject: `New Newsletter Subscriber`,
            html: `
                <h2>New Newsletter Subscriber</h2>
                <p>A new user has subscribed to the LIATI newsletter:</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
            `,
        });

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
