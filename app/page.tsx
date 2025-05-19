import { Linkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-[#fcf8f5]">
      <div className="w-full flex flex-row min-h-screen">
        <div className="flex-1 w-full h-full flex flex-col items-center justify-between min-h-screen gap-4">
          <div className=""></div>
          <div className="w-full flex flex-col items-center justify-center gap-4">
            <Image
              src="/logo.png"
              alt="Kylie Aspinall"
              width={100}
              height={100}
            />
            <div className="w-full flex flex-col items-center justify-center gap-2">
              <p className="text-4xl font-bold">Kylie Aspinall</p>
              <p className="text-xs md:text-lg">
                Group Managing Director | Women In Tech | Entrepreneur
              </p>
              <p className="text-xl mt-8 text-indigo-700">Coming Soon</p>
            </div>
          </div>

          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 group justify-self-end-safe pb-8"
            href="https://www.linkedin.com/in/kylieclark/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-4 h-4 group-hover:text-blue-500" />
            Connect with me →
          </a>
        </div>
        <div
          className="flex-1 bg-gradient-to-bl from-violet-500 via-pink-500 to-yellow-400 min-h-full w-full hidden lg:inline-block"
          style={{
            clipPath: "polygon(20% 0%, 100% 0, 100% 100%, 0% 100%)",
          }}
        >
          right
        </div>
      </div>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center group"></footer>
    </main>
  );
}
