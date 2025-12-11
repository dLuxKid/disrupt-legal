import { montserrat } from "@/app/fonts";
import Navbar from "@/components/layout/navbar";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-[url('/fintech-hero-bg.jpg')] text-center bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/45" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-[170px] lg:py-[250px] relative flex flex-col items-center justify-center gap-1 size-full">
          <h1 className="text-white font-bold text-4xl md:text-[55px]/[65px] lg:text-[60px]/[75px]">
            Fintech Advisory
          </h1>
          <p className="text-base/6 md:text-lg/[28px] text-white max-w-[775px]">
            Transform financial innovation into compliant, trusted, and scalable
            products ready for market and investment.
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
              In fintech, having a great product doesn&apos;t guarantee
              permission to operate. One missing approval can freeze payments,
              block integrations, or delay launch for months. Banks and
              regulators don&apos;t invest in ideas, they invest in trust,
              structure, and control. We help fintech founders secure that
              trust. From licensing to compliance alignment, we turn regulatory
              challenges into a clear path to launch and scale.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              What We Do
            </h2>
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                1. Licensing Strategy & Approvals
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We help you understand what licenses you need and get them
                faster. This includes:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Licensing gap assessment
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Application support Plus documentation
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Regulator engagement guidance
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Approval roadmap built around your business model
              </p>
              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                Launch delays kill momentum, we keep things moving.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                2. Payments & Digital Finance Compliance
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We align your systems with the rules that protect customers and
                unlock trust. This covers:
              </p>
            </div>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                AML/KYC program design
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Fraud detection and monitoring controls
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Fair customer treatment policies
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Real-world operational compliance
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                Better compliance makes stronger banking and partnership access.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                3. Governance & Operational Readiness
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                A product that scales must have a business that can scale with
                it.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />A
                product that scales must have a business that can scale with it.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Internal controls and reporting frameworks
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Clear roles and accountability structures
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Playbooks for teams and onboarding
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Audit-ready documentation
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                4. Banking & Partner Integration Support
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We help you pass strict due-diligence checks from institutional
                partners. We help organizations set up:
              </p>
            </div>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Documentation banks expect
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Risk representation and support
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Regulatory-response playbooks
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Partner confidence boosting frameworks
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                More approvals. Less friction. Faster integrations.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                5. Cross-Border Expansion Advisory
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                Ready to scale outside one market? Do it with legal certainty.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Regulatory mapping for target markets
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Multi-region compliance alignment
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Licensing requirements clarified
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Risk-reduced go-to-market plan
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
                Digital banks, payments, wallets, remittance, and lending
                platforms
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Growth-stage fintechs entering new jurisdictions
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Traditional finance firms shifting into digital services
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Investors validating regulatory readiness pre-funding
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                If your roadmap includes regulators, banks, or expansion, this
                is built for you.
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
                Investor-ready compliance foundation
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Lower operational plus legal risk
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Faster approvals from banks and regulators
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Stronger partner with customer trust
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Scalable systems built for real-world growth
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
