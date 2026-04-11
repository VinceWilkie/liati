'use client';
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const HIDDEN_ROUTES = [`/my-story`];

export default function FooterWrapper() {
    const pathname = usePathname();

    if (HIDDEN_ROUTES.includes(pathname)) {
        return null;
    }

    return <Footer />;
}
