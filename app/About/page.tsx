import Image from "next/image";

export default function About(){
    return (
        <div className="flex grow bg-amber-50">
            <main className ="flex flex-col w-full max-w-6xl my-16 ms-32 py-8 ps-32 border border-neutral-500 sm:items-start">
                <div className="w-full flex justify-between">
                    <h2 className="self-end text-4xl tracking-10 text-slate-700 font-mono">
                        About Me
                    </h2>
                    <Image
                        className = ""
                        src="/CSU-logo.png"
                        alt="CSU logo"
                        width={250}
                        height={250}
                        priority
                    />
                </div>
                <div className="w-full pt-4 pr-16">
                    <p className="border-t-2 pt-8 font-mono text-xl tracking-tighter text-stone-600">
                        I am a Senior at Colorado State University studying Computer Science. I am pursuing a career in software 
                        development or cybersecurity. I have a passion for improving things (in all facets of life including professionally)
                         and would like to apply my skills to a position where I can built real value. I have professional experience 
                         in front-end development gained as a
                         summer intern at a small payroll company called Payroll City.
                    </p>
                    <p className="pt-4 font-mono text-xl tracking-tighter text-stone-600">
                        I'm a Colorado native, and I love Fort Collins, as well as Colorado as a whole. However, I consider myself 
                        to be very adventerous and would be open to experiencing life in a new state. I am excited to see where my skills 
                        and career take me!
                    </p>
                </div>

            </main>
        </div>
    );
}