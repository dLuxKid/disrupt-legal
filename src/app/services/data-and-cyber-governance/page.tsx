import { montserrat } from "@/app/fonts";
import Navbar from "@/components/layout/navbar";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-[url('/data-hero-bg.jpg')] text-center bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/45" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-[170px] lg:py-[250px] relative flex flex-col items-center justify-center gap-1 size-full">
          <h1 className="text-white font-bold text-4xl md:text-[55px]/[65px] lg:text-[60px]/[75px]">
            Data & Cyber Governance
          </h1>
          <p className="text-base/6 md:text-lg/[28px] text-white max-w-[775px]">
            One breach. One mistake. That&apos;s all it takes to destroy years
            of trust and trigger legal consequences.
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
              Customers trust you with their data. Regulators expect you to
              protect it. Hackers hope you don&apos;t. In a digital business,
              data is the product and the biggest risk. A single leak can lead
              to: Frozen operations Heavy fines Customer lawsuits Banking and
              partnership exits Permanent reputation damage We build
              regulatory-aligned data and cybersecurity systems that protect
              your users and your company&apos;s future. In fintech and
              blockchain, trust is currency. If you lose it once, you may never
              get it back.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl/8 md:text-[40px]/[50px] font-bold">
              What We Do
            </h2>
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                1. Data Protection Compliance
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We make sure you meet global data laws before regulators ask.
                This includes:
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                GDPR, NDPA, ISO, and industry-standard alignment
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Governance frameworks that withstand audits
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Privacy, consent, and breach response controls
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                Stay compliant. Stay trusted. Stay operational.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                2. Cybersecurity Governance & Risk Controls
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We help you prevent breaches and survive them.
                <br />
                This covers:
              </p>
            </div>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Vulnerability and threat exposure mapping
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Risk scoring and prioritized fixes
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Incident response playbooks
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Vendor and infrastructure security checks
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                Hackers only need one weakness. We close all the obvious ones.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                3. Information Security Policies & Documentation
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                What you can&apos;t prove, you don&apos;t have.
              </p>
            </div>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Access controls, encryption, and device security policies
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Secure development standards (SDLC)
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Disaster recovery and continuity plans
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Messaging that protects you legally when breaches happen
              </p>
              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                When regulators ask for evidence, we hand it to them.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="space-y-1">
              <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
                4. Compliance for Digital Products & Data Flows
              </h6>
              <p className="text-black text-lg/[28px] md:text-[22px]/[30px]">
                We protect sensitive user information across your product
                journey. We help organizations set up:
              </p>
            </div>

            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Data mapping and minimization
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Secure wallet and payment data handling
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                API integrations + third-party risk controls
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                User protection disclosures
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                Every digital feature comes with legal responsibility.
              </span>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="text-xl/9 md:text-[28px]/[50px] text-black font-bold">
              5. Staff Awareness & Human Risk Management
            </h6>
            <div className="flex flex-col gap-1 text-black/80 text-lg/9 md:text-[22px]/12 [&>p]:pl-2 [&>p]:md:pl-4">
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Most breaches start with people, not systems.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Security training your team will actually remember
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Phishing and social engineering prevention
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Role-based access and accountability controls
              </p>

              <span className="text-black/80 text-lg/[28px] md:text-[22px]/8">
                A secure company is built by secure habits.
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
                Fintech, blockchain, and digital finance platforms
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Data-rich scale-ups managing sensitive information
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Companies preparing for licensing or investor due diligence
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Anyone handling customer identity, transaction, or personal data
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
                Stronger trust with users, partners, and regulators
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Lower operational and reputational risk
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Fewer legal liabilities and fines
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Better investment and licensing readiness
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Peace of mind for founders and leadership
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Compliance protects your legal risk.
              </p>
              <p className="flex items-center gap-1.5">
                <span className="size-1 bg-black/80 rounded-full shrink-0" />
                Governance protects your legacy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
