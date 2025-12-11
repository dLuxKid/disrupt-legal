import { lora, montserrat, roboto } from "@/app/fonts";
import Navbar from "@/components/layout/navbar";

export default function page() {
  return (
    <main className="flex flex-col">
      <section className="flex flex-col bg-[url('/regulatory-hero-bg.jpg')] text-center bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/45" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-[170px] lg:py-[220px] relative flex flex-col items-center justify-center gap-1 size-full">
          <div className="bg-white/15 py-1.5 px-2.5 rounded-[8px] flex items-center justify-center">
            <p className="font-bold text-[10px] text-white">Technology</p>
          </div>
          <h1 className="text-white font-bold text-[32px] md:text-[40px] lg:text-[50px] max-w-[1240px]">
            Regulatory Readiness as a Competitive Advantage in Web3
          </h1>
          <p className="text-xs/5 md:text-[14px]/[22px] text-[#E5E5E5]">
            What Institutional Partners Now Expect
          </p>
          <p className="text-xs/[18px] md:text-[14px]/5 text-white font-bold">
            By Disrupt Legal
          </p>
        </div>
      </section>

      <section className="flex items-center justify-center relative">
        <div
          className={`${montserrat.className} mw px-4 md:px-10 lg:px-20 py-10 lg:py-16 flex flex-col gap-8 text-lg md:text-[22px] leading-8`}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              Web3 Doesn&apos;t Fail in the Code, It Fails in Due Diligence
            </h2>
            <p>Most founders think success depends on great technology.</p>
            <p>But in digital assets, the real decisions happen in meetings:</p>
            <ul className="flex flex-col gap-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>A bank reviewing your controls</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>An investor evaluating your licensing risk</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>
                  A partner assessing whether you&apos;re safe to integrate with
                  If any of them sense uncertainty, the deal pauses or dies.
                </span>
              </li>
            </ul>
            <p>
              That&apos;s why regulatory readiness isn&apos;t a &quot;legal
              requirement.&quot;, but a business strategy.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              Compliance Is No Longer About Avoiding Trouble
            </h2>
            <p>In B2B Web3, compliance determines:</p>
            <ul className="flex flex-col gap-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Who will partner with you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Whether investors will fund you</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>How fast you can enter new markets</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Whether you can access banking rails</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>If customers believe you can survive long-term</span>
              </li>
            </ul>
            <p>Strong compliance opens doors.</p>
            <p>Weak compliance shuts them, usually at the worst time.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              The Risks Founders Don&apos;t See Coming
            </h2>
            <p>
              Here&apos;s what halts growth long before regulators even show up:
            </p>
            <ul className="flex flex-col gap-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Banks refusing to onboard your company</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Exchanges rejecting your token listing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Investors lowering valuation due to regulatory gaps</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>
                  Partners delaying integration for &quot;risk review&quot;
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Payment processors cutting you off without warning</span>
              </li>
            </ul>
            <p>
              One hidden compliance flaw can break everything you&apos;ve built.
              And fixing it later costs 10x more because now it&apos;s urgent.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              What Institutional Partners Look For
            </h2>
            <p>Banks, investors, and enterprise clients want one thing:</p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[24px] font-bold">Confidence.</h3>
            <p>They need to see:</p>
            <ul className="flex flex-col gap-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>You know how your token is classified</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>You can prevent and detect bad actors</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>You protect user data and reputation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>You have governance and controls that scale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>You&apos;re prepared for evolving regulation</span>
              </li>
            </ul>
            <p>
              When founders answer those questions with assumptions, trust
              collapses. When they answer with evidence, trust compounds.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              The Founders Who Win Are the Ones Who Prepare Early
            </h2>
            <p>Web3 leaders who scale successfully do five things well:</p>
          </div>

          <div className="flex flex-col gap-4">
            <p>
              <span className="font-bold">
                1. They understand their regulatory exposure
              </span>
            </p>
            <p className="ml-4">
              Knowing what&apos;s allowed and what isn&apos;t.
            </p>

            <p>
              <span className="font-bold">
                2. They design token and product features that reduce
                enforcement risk
              </span>
            </p>
            <p className="ml-4">Innovation without unnecessary complexity.</p>

            <p>
              <span className="font-bold">
                3. They build governance that investors take seriously
              </span>
            </p>
            <p className="ml-4">Real accountability with no bureaucracy</p>

            <p>
              <span className="font-bold">
                4. They create documentation that proves control
              </span>
            </p>
            <p className="ml-4">
              Banks won&apos;t accept stories; they need proof.
            </p>

            <p>
              <span className="font-bold">
                5. They plan for market expansion from day one
              </span>
            </p>
            <p className="ml-4">Because every region rewrites the rules.</p>

            <p>
              Institutional stakeholders don&apos;t expect perfection. They
              expect clarity and direction.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              The Opportunity Hidden in Compliance
            </h2>
            <p>When you show you&apos;re legal-ready:</p>
            <ul className="flex flex-col gap-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Deals move faster</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Talent trusts the mission</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Investors increase confidence</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Partners say &quot;yes&quot; sooner</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>New markets become achievable</span>
              </li>
            </ul>
            <p>Compliance becomes not a cost, but a competitive edge.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              How Disrupt Legal Helps
            </h2>
            <p>We guide blockchain teams to:</p>
            <ul className="flex flex-col gap-2 ml-4">
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>See what regulators and partners will challenge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Adjust product design before launch problems occur</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>Build compliance that supports, no slow growth</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="size-1.5 bg-black rounded-full shrink-0 mt-3" />
                <span>
                  Prepare materials for licensure, banking, and investment
                  review
                </span>
              </li>
            </ul>
            <p>
              You focus on innovation. We make sure you&apos;re allowed to scale
              it.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              Three Questions Every Web3 Executive Should Ask
            </h2>
            <p>1. Can we clearly explain our compliance position to a bank?</p>
            <p>2. If a regulator reviewed us tomorrow, would we be ready?</p>
            <p>3. Do our controls increase trust or erode it?</p>
            <p>If any answer feels uncertain, it&apos;s a signal to act now.</p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-[28px] font-bold">
              Preparing for global scale in Web3?
            </h2>
            <p>
              Let&apos;s build the regulatory confidence your partners expect.
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center relative">
        <div className="mw px-4 md:px-10 lg:px-20 py-10 lg:py-16 flex flex-col gap-8 md:gap-10">
          <p
            className={`${lora.className} text-base/5 md:text-lg/6 text-[#495057] font-bold`}
          >
            Related Posts
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="h-[350px] w-full rounded-[5px] flex flex-col justify-between gap-8 p-6 md:p-8"
                style={{
                  backgroundImage: `url('/related-post-${i + 1}.png')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <div className="self-end py-1.5 px-2.5 rounded-[8px] bg-white/15 flex items-center justify-center">
                  <p
                    className={`${roboto.className} font-bold text-[10px] text-white`}
                  >
                    FASHION
                  </p>
                </div>
                <div
                  className={`${lora.className} flex flex-col gap-4 sm:gap-6`}
                >
                  <p className="text-xs text-[#F5F5F5]">08.08.2021</p>
                  <p className="text-base/[22px] md:text-lg/6 text-white font-bold">
                    Richird Norton photorealistic rendering as real photos
                  </p>
                  <p className="text-xs/5 text-[#f5f5f5]">
                    Progressively incentivize cooperative systems through
                    technically sound functionalities. The credibly productivate
                    seamless data.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
