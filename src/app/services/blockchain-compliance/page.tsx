import Navbar from "@/components/layout/navbar";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-[url('/blockchain-hero-bg.jpg')] text-center bg-cover bg-center bg-no-repeat relative">
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
      <section className="flex items-center justify-center relative">
        <div className="mw px-4 md:px-10 lg:px-20 py-10 lg:py-16 flex flex-col gap-9 md:gap-14 tracking-[-2px]">
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              Overview
            </h2>
            <p className="text-black/80 text-lg/[28px] md:text-[22px]/8">
              Blockchain is transforming the way value is created, stored, and
              exchanged — but it also introduces new regulatory, operational,
              and compliance challenges. DisruptLegal helps organizations
              navigate this fast-changing landscape with clarity, structure, and
              globally informed compliance strategies. Whether you’re launching
              a new Web3 platform, building a digital asset product, or scaling
              blockchain infrastructure, we ensure your operations meet
              regulatory expectations across markets while staying true to
              innovation.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              What We Do
            </h2>
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                1. Regulatory Landscape Assessment
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We help you understand the requirements that apply to your
                blockchain product or digital asset offering. This includes:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Jurisdiction-specific compliance obligations
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Emerging global regulations (MiCA, SEC, FCA, etc.)
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Digital asset risk classifications
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Governance expectations for blockchain networks
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                We provide clear insights on how these rules impact your
                product, launch strategy, and long-term roadmap.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                2. Compliance Framework Development
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We design end-to-end frameworks tailored to your business model.
                This covers:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Digital asset risk assessment
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Transaction monitoring expectations
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Governance and operational controls
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Data, privacy, and identity requirements
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Cross-border compliance alignment
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                We provide clear insights on how these rules impact your
                product, launch strategy, and long-term roadmap.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                3. Web3 Product & Platform Compliance
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We support the compliance needs of blockchain-powered products
                such as:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Wallets & digital asset custody
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Tokenized assets & securities
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Payment networks and stablecoins
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                DeFi platforms
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                NFT marketplaces
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Blockchain infrastructure provider
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                We guide you on product design choices that align with
                regulatory standards without compromising innovation.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                4. Risk & Governance Advisory
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                Blockchain introduces unique operational and financial risks. We
                help organizations set up:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Governance policies
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Digital asset risk management rules
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Internal controls and reporting structures
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Smart contract and protocol-related risk considerations
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
                5. Documentation & Policy Support
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We prepare clear, actionable documentation for internal and
                external stakeholders, including:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Compliance manuals
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Internal risk policies
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                User-facing compliance statements
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Product governance and operational guidelines
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                We translate complex regulatory expectations into practical,
                easy-to-implement documentation.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              Who This Service Is For
            </h2>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Web3 startups
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Fintech companies integrating digital assets
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Blockchain infrastructure providers
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Traditional organizations exploring tokenization
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Exchanges, custodians & digital asset platforms
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Investors, accelerators & innovation hubs
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
                Clarity in complex regulatory environments
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Reduced compliance and operational risk
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Faster product development and launch
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Stronger governance and user trust
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Global-ready frameworks that scale
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
