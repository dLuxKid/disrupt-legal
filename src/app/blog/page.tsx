import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import Link from "next/link";
import { workSans } from "../fonts";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-[url('/blog-hero-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen relative">
        <div className="absolute inset-0 bg-black/40" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-20 lg:py-[160px] relative">
          <div className="w-full space-y-6 max-w-[684px]">
            <h1 className="text-white font-medium text-4xl/[100%] md:text-[55px]/[100%]">
              Insights for the Future of Compliance
            </h1>
            <p className="text-white text-sm/5 md:text-base/6">
              Stay updated with analysis, trends, and practical guidance on
              emerging regulations, digital compliance, and technology
              governance.
            </p>
            <div>
              <Link href={""}>
                <button className="flex items-center justify-center rounded-[5px] h-[50px] w-[204px] bg-secondary text-sm/[140%] tracking-[-2%] text-white font-semibold">
                  Read Latest Insights
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className={`${workSans} relative flex items-center justify-center`}
      >
        <div className="mw flex flex-col gap-6 md:gap-8 py-10 lg:py-16 px-4 md:px-10 lg:px-20">
          <h4 className="text-xl/6 md:text-[25px]/[30px] font-medium tracking-[-2%] text-[#181A2A]">
            Latest Post
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 9 }).map((_, i) => (
              <div
                key={i}
                className="flex flex-col gap-4 p-4 bg-white border border-[#E8E8EA] rounded-[12px]"
              >
                <Image
                  src={`/blog-${i + 1}.png`}
                  alt={"blog thumbnail"}
                  width={378}
                  height={252}
                  className="w-full h-auto rounded-[6px] bg-contain bg-center bg-no-repeat"
                />
                <div className="space-y-5 p-2">
                  <div className="space-y-4">
                    <div className="py-1 px-2.5 rounded-[6px] bg-[#4B6BFB0D] w-fit">
                      <p className="text-secondary text-xs sm:text-[15px]/[21px] font-medium">
                        Technology
                      </p>
                    </div>
                    <p className="text-[#181A2A] font-semibold text-xl/6 md:text-[25px]/[29px]">
                      The Impact of Technology on the Workplace: How Technology
                      is Changing
                    </p>
                  </div>
                  <div className="flex gap-3 md:gap-5 items-center text-sm/5 md:text-base/6 text-[#97989F]">
                    <div className="flex items-center gap-3">
                      <Image
                        src={"/author.png"}
                        alt="author"
                        width={37}
                        height={37}
                        className="rounded-full"
                      />
                      <p>Tracey Wilson</p>
                    </div>
                    <p>August 20, 2022</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
