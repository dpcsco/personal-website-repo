import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex grow justify-center bg-zinc-100 font-sans">
      <main className="flex w-full max-w-3xl flex-col justify-between py-32 px-16 bg-slate-50 sm:items-start"
             style={{
               boxShadow: "0px 0px 40px -10px rgba(70, 70, 70, 0.5)"
             }}
      >
        <div className="flex flex-col items-center gap-10 text-center sm:items-start sm:text-left">
          <h1 className="max-w-s text-4xl font-semibold leading-10 tracking-tight text-black">
            Welcome to Daniel's Website! 
          </h1>
          <h2 className="pt-10 max-w-s text-2xl tracking-tight text-black">
            To learn more about me, navigate to the About section.
          </h2>
          <h2 className="pt-2 text-sm uppercase tracking-widest font-semibold text-stone-500">
             Built with Next.js and React, written in TypeScript and styled using Tailwind CSS.
          </h2>
          {/*
          <h3 className="absolute bottom-0 max-w-lg text-lg font-light leading-relaxed text-stone-400">
             Built with Next.js and React, written in TypeScript and styled using Tailwind CSS.
          </h3>
          */}
        </div>
        {/*
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        */}
      </main>
    </div>
  );
}
