import { montserrat } from "@/app/fonts";
import Navbar from "@/components/layout/navbar";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-[url('/policy-hero-bg.webp')] text-center bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/45" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-[170px] lg:py-[250px] relative flex flex-col items-center justify-center gap-1 size-full">
          <h1 className="text-white font-bold text-4xl md:text-[55px]/[65px] lg:text-[60px]/[75px]">
            Policy & Regulatory Insight
          </h1>
          <p className="text-base/6 md:text-lg/[28px] text-white max-w-[775px]">
            See regulatory shifts and make better decisions faster than your
            competitors.
          </p>
        </div>
      </section>
      <section
        className={`${montserrat.className} flex items-center justify-center relative`}
      >
        <div className="mw px-4 md:px-10 lg:px-20 py-10 lg:py-16 flex flex-col gap-9 md:gap-14 tracking-[-2px]">
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              Overview
            </h2>
            <p className="text-black/80 text-lg/[28px] md:text-[22px]/8">
              Financial criminals love digital finance. Regulators expect you to
              stop them. If your controls fail even once, the consequences can
              hit fast: Frozen bank accounts, platform shutdowns, regulatory
              investigations, partnerships denied or cancelled and loss of
              investor confidence We build Anti-Money Laundering systems that
              catch the bad actors while keeping honest customers flowing
              smoothly through your platform. “If you can&apos;t detect crime,
              regulators assume you&apos;re enabling it.”
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              What We Do
            </h2>
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                1. Regulatory Intelligence & Monitoring
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We create a compliance backbone tailored to your product and
                risk level. <br /> This includes:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Early alerts on upcoming rules
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                What changes mean for your product and market
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Practical implications explained clearly
              </p>

              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Business-aligned recommendations
              </p>
              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                Stay informed. Stay ahead. Stay protected.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                2. Market Entry & Expansion Advisory
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                New markets = new laws. We navigate the complexity.
                <br />
                This covers:
              </p>
            </div>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Jurisdictional compliance mapping
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Licensing feasibility studies
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Entry strategy driven by regulation
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Partner, ecosystem & banking readiness
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
              3. Investor & Board-Facing Insights
            </h6>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                We equip leadership with data-backed regulatory clarity.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Trends that influence valuation & risk perception
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Narrative framing to win decision-maker support
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Reports built for due diligence and strategy
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Confidence makes capital flow.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
              4. Public Policy & Stakeholder Engagement
            </h6>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Influence the rules that shape your industry.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Regulator communication frameworks
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Policy position papers + consultation input
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Industry advocacy and partnerships
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Leaders don&apos;t just follow policy, they help write it.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                5. Compliance Innovation Advisory
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We align new ideas with tomorrow&apos;s rules, not
                yesterday&apos;s.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Novel product legal strategy
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Innovation risk mapping
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Future-proofing your roadmap
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Guardrails that promote growth
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              Who This Service Is For
            </h2>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Fintech and blockchain companies operating in evolving markets
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Leaders planning strategic moves in regulated environments
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Investors needing sharp regulatory intelligence
              </p>
              <p className="flex items-center gap-1.5">
                Teams entering new regions with new risks
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              Value We Deliver
            </h2>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Better decisions based on real regulatory insight
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Reduced surprise risk from new rules
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Faster and safer market expansion
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Increased investor and regulator confidence
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Strategic edge as laws evolve
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
