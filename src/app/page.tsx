'use client';
import React from "react";
import "./page.css";
import Image from "next/image";

export default function Home() {
  const [step, setStep] = React.useState(0);

  function handleClick(step: number) {
    setStep(step);
  }

  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="text-center flex flex-col">
        <div className="logo-wrapper">
          <Image
            className={`animate-fadeUp ${step === 0 ? `` : `hidden`}`}
            src="/love-is-all-there-is.png"
            alt="Love is all there is"
            width={500}
            height={500}
            priority
            onClick={() => handleClick(1)}
          />
          <Image
            className={`animate-fadeUp ${step === 1 ? `` : `hidden`}`}
            src="/leap-and-a-net-will-appear.png"
            alt="Leap & a net will appear"
            width={500}
            height={500}
            priority
            onClick={() => handleClick(0)}
          />
        </div>
      </main>
    </div>
  );
}
