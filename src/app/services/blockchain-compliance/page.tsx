import { montserrat } from "@/app/fonts";
import Navbar from "@/components/layout/navbar";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-[url('/blockchain-hero-bg.webp')] text-center bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/45" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-[170px] lg:py-[250px] relative flex flex-col items-center justify-center gap-1 size-full">
          <h1 className="text-white font-bold text-4xl md:text-[55px]/[65px] lg:text-[60px]/[75px]">
            Blockchain Compliance
          </h1>
          <p className="text-base/6 md:text-lg/[28px] text-white max-w-[775px]">
            Helping businesses build trust, stability, and regulatory readiness
            in the evolving digital asset ecosystem.
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
              Blockchain is changing how we store value, spend money, and trust
              systems but without the right legal strategy innovation can
              quickly turn into liability. A product that feels harmless to your
              team can look like a high-risk financial instrument to regulators.
              We help you stay compliant from Day 1, avoiding shutdown threats,
              banking restrictions, and investor concerns, so you can build
              boldly while staying fully protected.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              What We Do
            </h2>
            <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
              1. Regulatory Assessment & Roadmap
            </h6>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                We translate complex crypto laws into clear actions you can
                execute.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Identify what regulations apply to your token or platform
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Reveal red-flag risks before they affect launch
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Provide a founder-friendly compliance roadmap
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Align with crypto, payments, and securities rules
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                You&apos;ll know exactly what is safe and what needs fixing
                fast.
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                2. Business-Fit Compliance Design
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We create compliance structures that enhance growth instead of
                blocking it. This covers:
              </p>
            </div>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Operational and governance frameworks
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Licensing-preparation for exchanges, wallets & products
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Controls for digital assets, custody, and transactions
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Embedded processes, not heavy paperwork
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                Designed around speed, user experience, and scale.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                3. Product & Token Review
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We ensure your product design won&apos;t trigger unintended
                regulation.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Token classification (utility vs security)
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                NFT, DeFi, DAO & staking model evaluation
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Platform launch readiness checks
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Consumer protection and disclosure strategy
              </p>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
              4. Governance & Risk Protection
            </h6>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                We help founders make brave moves without exposing the business.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Risk policies for operations, data, and finance
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Partner & regulator-friendly documentation
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Board advisory on compliance decisions
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Strategies for bank and exchange relationships
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                More trust equals more access to partners, investors, and
                liquidity.
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                This ensures your platform earns trust from users, partners, and
                regulators.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                5. Documentation That Defends You
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We prepare clear, actionable documentation for internal and
                external stakeholders, including:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Well-structured documentation is your first line of defense.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Terms & conditions people actually understand
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Privacy, AUP, and risk disclosure policies
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Internal compliance playbooks
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Continuous updates as laws evolve
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
                Web3 startups building wallets, tokens, DeFi, NFTs
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Crypto exchanges and digital asset brokers
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Fintechs adding blockchain payment rails
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Institutional players exploring tokenisation
              </p>
              <span className="text-black/80 text-lg/9 md:text-[22px]/12">
                If you&apos;re building anything on-chain and wondering:
              </span>
              <span className="text-black/80 text-lg/9 md:text-[22px]/12">
                “Are we in compliance?”, this is for you.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              Value We Deliver
            </h2>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Clear compliance structure that scales globally
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Reduced enforcement + banking risk
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Faster launches and fundraising
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Stronger trust from users, partners & regulators
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                No distractions so founders stay focused on innovation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
