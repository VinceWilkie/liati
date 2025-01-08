import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[1fr] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="text-center flex flex-col">
        <Image
          className="animate-fadeUp"
          src="/liati.png"
          alt="Love is all there is"
          width={500}
          height={500}
          priority
        />
      </main>
    </div>
  );
}
