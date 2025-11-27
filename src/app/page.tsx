import Navbar from "@/components/layout/navbar";
import Link from "next/link";
import { openSans } from "./fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col">
      <section className="w-full flex flex-col bg-[url('/home-hero-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen relative">
        <div className="absolute inset-0 bg-black/35 -z-10" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-20 lg:py-[160px] relative">
          <div className="w-full space-y-6 max-w-[684px]">
            <h1 className="text-white font-medium text-4xl/[100%] md:text-[55px]/[100%]">
              Bridging Innovation and Law in the Digital Age.
            </h1>
            <p className="text-white text-sm/5 md:text-base/6">
              disruptLegal is a technology-centred legal solutions and policy
              research firm helping startups, businesses, and policymakers
              navigate the complexities of blockchain, AI, fintech, data
              governance, and compliance in a rapidly evolving digital world.
            </p>
            <div>
              <Link href={"/services"}>
                <button className="flex items-center justify-center rounded-[5px] h-[50px] w-[204px] bg-secondary text-sm/[140%] tracking-[-2%] text-white font-semibold">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative flex items-center justify-center">
        <div className="mw flex flex-col items-center px-4 md:px-10 lg:px-20 py-10 lg:py-[60px] gap-8 lg:gap-16">
          <div className="max-w-[892px] text-center space-y-[18px]">
            <h4 className="text-3xl/10 md:text-[50px]/[60px] font-medium text-bg">
              Built for the future bridging innovation and regulation.
            </h4>
            <p
              className={`${openSans.className} text-base/[22px] md:text-lg/[26px] text-body`}
            >
              disruptLegal is a technology-centred legal solutions and policy
              research firm specialising in emerging technologies and markets.
              We combine law, technology, and policy innovation to help
              startups, businesses, and governments navigate the fast-evolving
              worlds of blockchain, AI, fintech, and data governance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-[50px] gap-y-6 md:gap-y-8">
            {[
              {
                icon: (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M50.4168 27.5C50.4168 30.5094 49.824 33.4895 48.6724 36.2697C47.5206 39.0502 45.8328 41.5766 43.7048 43.7046C41.5767 45.8326 39.0504 47.5205 36.2699 48.6722C33.4897 49.8238 30.5096 50.4167 27.5002 50.4167C24.4907 50.4167 21.5107 49.8238 18.7303 48.6722C15.95 47.5205 13.4236 45.8326 11.2956 43.7046C9.16763 41.5766 7.47959 39.0502 6.32791 36.2697C5.17626 33.4895 4.5835 30.5094 4.5835 27.5C4.5835 24.4906 5.17626 21.5105 6.32794 18.7302C7.47959 15.9498 9.16763 13.4235 11.2956 11.2955C13.4236 9.16747 15.95 7.47943 18.7303 6.32775C21.5107 5.17609 24.4907 4.58333 27.5002 4.58333C30.5096 4.58333 33.4897 5.17609 36.2699 6.32777C39.0504 7.47943 41.5767 9.16747 43.7048 11.2955C45.8328 13.4235 47.5206 15.9498 48.6724 18.7302C49.824 21.5105 50.4168 24.4906 50.4168 27.5Z"
                      stroke="#0A1931"
                      strokeWidth="3.4375"
                    />
                    <path
                      d="M36.6668 27.5C36.6668 30.5094 36.4296 33.4895 35.969 36.2697C35.5084 39.0502 34.8333 41.5766 33.9819 43.7046C33.1308 45.8326 32.1202 47.5205 31.008 48.6722C29.8959 49.8238 28.704 50.4167 27.5002 50.4167C26.2964 50.4167 25.1045 49.8238 23.9923 48.6722C22.8801 47.5205 21.8696 45.8326 21.0183 43.7046C20.1671 41.5766 19.4919 39.0502 19.0313 36.2697C18.5706 33.4895 18.3335 30.5094 18.3335 27.5C18.3335 24.4906 18.5706 21.5105 19.0313 18.7302C19.4919 15.9498 20.1671 13.4235 21.0183 11.2955C21.8696 9.16747 22.8801 7.47943 23.9923 6.32775C25.1045 5.17609 26.2964 4.58333 27.5002 4.58333C28.704 4.58333 29.8959 5.17609 31.008 6.32777C32.1202 7.47943 33.1308 9.16747 33.9819 11.2955C34.8333 13.4235 35.5084 15.9498 35.969 18.7302C36.4296 21.5105 36.6668 24.4906 36.6668 27.5Z"
                      stroke="#0A1931"
                      strokeWidth="3.4375"
                    />
                    <path
                      d="M4.5835 27.5H50.4168"
                      stroke="#0A1931"
                      strokeWidth="3.4375"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                title: "Global Regulatory Expertise",
                description:
                  "Helping businesses stay compliant across jurisdictions and fast-changing global standards. Our team delivers clarity and precision in navigating diverse regulatory environments worldwide.",
              },
              {
                icon: (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3335 29.7917C22.1305 29.7917 25.2085 26.7136 25.2085 22.9167C25.2085 19.1197 22.1305 16.0417 18.3335 16.0417C14.5365 16.0417 11.4585 19.1197 11.4585 22.9167C11.4585 26.7136 14.5365 29.7917 18.3335 29.7917Z"
                      fill="#FF6B6B"
                    />
                    <path
                      d="M38.9583 27.5V38.9583M29.7917 38.9583V34.375M6.875 34.375L13.3604 27.8896M18.3333 16.0417C16.9736 16.0417 15.6444 16.4449 14.5138 17.2003C13.3832 17.9557 12.502 19.0295 11.9817 20.2857C11.4613 21.542 11.3252 22.9243 11.5904 24.2579C11.8557 25.5915 12.5105 26.8165 13.472 27.778C14.4335 28.7395 15.6585 29.3943 16.9921 29.6596C18.3257 29.9248 19.708 29.7887 20.9643 29.2683C22.2205 28.748 23.2943 27.8668 24.0497 26.7362C24.8051 25.6056 25.2083 24.2764 25.2083 22.9167C25.2083 21.0933 24.484 19.3446 23.1947 18.0553C21.9054 16.766 20.1567 16.0417 18.3333 16.0417Z"
                      stroke="#0A1931"
                      strokeWidth="4.58333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.3332 6.875H45.8332C46.441 6.875 47.0239 7.11644 47.4536 7.54621C47.8834 7.97598 48.1248 8.55888 48.1248 9.16667V45.8333C48.1248 46.4411 47.8834 47.024 47.4536 47.4538C47.0239 47.8836 46.441 48.125 45.8332 48.125H18.3332C17.7254 48.125 17.1425 47.8836 16.7127 47.4538C16.2829 47.024 16.0415 46.4411 16.0415 45.8333V38.9583"
                      stroke="#0A1931"
                      strokeWidth="4.58333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Policy and Research Insight",
                description:
                  "Combining research and advisory to shape smarter, sustainable digital regulations. We provide evidence-based analysis that helps governments and organisations craft forward-thinking legal frameworks.",
              },
              {
                icon: (
                  <svg
                    width="55"
                    height="55"
                    viewBox="0 0 55 55"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M34.375 27.5C34.375 31.2971 31.2971 34.375 27.5 34.375C23.7029 34.375 20.625 31.2971 20.625 27.5C20.625 23.7029 23.7029 20.625 27.5 20.625C31.2971 20.625 34.375 23.7029 34.375 27.5Z"
                      stroke="#0A1931"
                      strokeWidth="4.58333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M29.573 7.01261C29.1014 6.875 28.5677 6.875 27.5 6.875C26.4323 6.875 25.8986 6.875 25.427 7.01261C24.7367 7.21403 24.1269 7.62685 23.6835 8.19296C23.3805 8.57972 23.1823 9.07537 22.7858 10.0667C22.2159 11.4916 20.634 12.2254 19.178 11.7402L17.8699 11.3044C16.9421 10.9951 16.4781 10.8404 16.0232 10.8139C15.3551 10.775 14.69 10.932 14.1098 11.2656C13.7148 11.4927 13.369 11.8385 12.6774 12.5301C11.9424 13.2652 11.5748 13.6327 11.3414 14.0522C10.9983 14.6686 10.8532 15.3756 10.9257 16.0772C10.9751 16.5548 11.1681 17.0374 11.5542 18.0026C12.1588 19.5141 11.5771 21.241 10.1812 22.0787L9.54527 22.4603C8.57154 23.0445 8.08468 23.3367 7.73103 23.7389C7.41808 24.0948 7.18211 24.5117 7.03791 24.9631C6.875 25.4732 6.875 26.0466 6.875 27.1936C6.875 28.5516 6.875 29.2304 7.09184 29.8118C7.28344 30.3254 7.59509 30.7856 8.00076 31.1543C8.45987 31.5714 9.08405 31.8212 10.3323 32.3205C11.6081 32.8306 12.2649 34.2469 11.8304 35.5504L11.3374 37.0297C10.9959 38.054 10.8251 38.5665 10.8096 39.0697C10.7909 39.6749 10.9324 40.2742 11.2197 40.807C11.4587 41.2505 11.8405 41.6323 12.6042 42.3958C13.3678 43.1594 13.7497 43.5412 14.1929 43.7802C14.7258 44.0676 15.3251 44.2092 15.9303 44.1904C16.4336 44.1749 16.9459 44.0041 17.9704 43.6627L19.1781 43.26C20.634 42.7749 22.2159 43.5084 22.7858 44.9334C23.1823 45.9245 23.3805 46.4202 23.6835 46.8071C24.1269 47.3731 24.7367 47.7861 25.427 47.9875C25.8986 48.125 26.4323 48.125 27.5 48.125C28.5677 48.125 29.1014 48.125 29.573 47.9875C30.2633 47.7861 30.8731 47.3731 31.3165 46.8071C31.6195 46.4202 31.8177 45.9245 32.2142 44.9334C32.7841 43.5084 34.3661 42.7749 35.8217 43.2605L37.0285 43.6629C38.0531 44.0044 38.5655 44.1751 39.0688 44.1907C39.674 44.2092 40.2733 44.0678 40.8061 43.7805C41.2493 43.5414 41.6313 43.1596 42.3949 42.3961C43.1585 41.6325 43.5403 41.2505 43.7793 40.8073C44.0667 40.2744 44.2081 39.6749 44.1895 39.0699C44.1739 38.5667 44.0032 38.0543 43.6618 37.0297L43.169 35.5515C42.7343 34.2476 43.3913 32.8309 44.6676 32.3205C45.9158 31.8212 46.5401 31.5714 46.9993 31.1543C47.405 30.7856 47.7166 30.3254 47.9082 29.8118C48.125 29.2304 48.125 28.5516 48.125 27.1936C48.125 26.0466 48.125 25.4732 47.9621 24.9631C47.8179 24.5117 47.5819 24.0948 47.2691 23.7389C46.9152 23.3367 46.4285 23.0445 45.4548 22.4603L44.8179 22.0783C43.422 21.2407 42.8402 19.5139 43.445 18.0024C43.8309 17.0372 44.0241 16.5546 44.0733 16.077C44.1458 15.3754 44.0007 14.6684 43.6576 14.0521C43.4241 13.6326 43.0568 13.265 42.3216 12.53C41.63 11.8384 41.2841 11.4926 40.8893 11.2654C40.309 10.9318 39.644 10.7748 38.9758 10.8137C38.5209 10.8402 38.057 10.9949 37.1291 11.3042L35.822 11.7399C34.3661 12.2252 32.7841 11.4916 32.2142 10.0667C31.8177 9.07537 31.6195 8.57972 31.3165 8.19296C30.8731 7.62685 30.2633 7.21403 29.573 7.01261Z"
                      stroke="#0A1931"
                      strokeWidth="4.58333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ),
                title: "Technology-Driven Legal Practice",
                description:
                  "Legal solutions that align with innovation, built on a deep understanding of emerging technologies and digital systems. We translate complex tech concepts into practical, compliant legal strategies.",
              },
              {
                icon: (
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 60 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_95_371)">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M16.2498 15.0358V12.7442C16.2498 8.94722 19.3279 5.86917 23.1248 5.86917H36.8748C40.6719 5.86917 43.7498 8.94722 43.7498 12.7442V15.0358H48.3332C52.1302 15.0358 55.2082 18.1139 55.2082 21.9108V49.4108C55.2082 53.2079 52.1302 56.2858 48.3332 56.2858H11.6665C7.86956 56.2858 4.7915 53.2079 4.7915 49.4108V21.9108C4.7915 18.1139 7.86956 15.0358 11.6665 15.0358H16.2498ZM20.8332 12.7442C20.8332 11.4785 21.8592 10.4525 23.1248 10.4525H36.8748C38.1405 10.4525 39.1665 11.4785 39.1665 12.7442V15.0358H20.8332V12.7442ZM48.0628 19.6192H11.937L17.0328 29.8107C17.4209 30.5871 18.2145 31.0775 19.0825 31.0775H27.7082C27.7082 29.8118 28.7341 28.7858 29.9998 28.7858C31.2655 28.7858 32.2915 29.8118 32.2915 31.0775H40.9171C41.7852 31.0775 42.5788 30.5871 42.967 29.8107L48.0628 19.6192ZM27.7082 35.6608H19.0825C16.4784 35.6608 14.0979 34.1896 12.9333 31.8603L9.37484 24.7435V49.4108C9.37484 50.6765 10.4009 51.7025 11.6665 51.7025H48.3332C49.5989 51.7025 50.6248 50.6765 50.6248 49.4108V24.7435L47.0663 31.8603C45.9017 34.1896 43.5211 35.6608 40.9171 35.6608H32.2915C32.2915 36.9265 31.2655 37.9525 29.9998 37.9525C28.7341 37.9525 27.7082 36.9265 27.7082 35.6608Z"
                        fill="#0A1931"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_95_371">
                        <rect width="60" height="60" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                ),
                title: "Agile and Client-Focused",
                description:
                  "A modern, adaptive approach that prioritises clarity, speed, and measurable client outcomes. We move with innovation—helping clients stay ahead in evolving digital and legal landscapes.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-foundation rounded-[15px] border border-black/15 py-10 md:py-[60px] px-6 md:px-10 flex flex-col gap-[30px]"
              >
                <div>{item.icon}</div>
                <div className="space-y-4">
                  <h6 className="text-lg/5 md:text-2xl/6 text-bg font-bold">
                    {item.title}
                  </h6>
                  <p
                    className={`${openSans.className} text-body text-sm/5 md:text-base/6`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full relative flex items-center justify-center">
        <div className="mw flex flex-col gap-[50px] py-10 lg:py-16 px-4 md:px-10 lg:px-20">
          <h4 className="text-2xl md:text-[45px]/[60px] font-medium tracking-[-2%] text-black">
            Our Core Solutions
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "/service-1.png",
                tag: "Blockchain",
                title:
                  "Navigating digital ownership and tokenisation with legal precision",
                text: "We help blockchain and crypto businesses stay compliant through audits, global licensing, and smart contract assurance.",
              },
              {
                image: "/service-2.png",
                tag: "Fintech",
                title:
                  "Building financial innovation on a compliant foundation",
                text: "From licensing to global outsourcing, we guide fintechs and digital finance platforms through complex regulatory landscapes.",
              },
              {
                image: "/service-3.png",
                tag: "Data & Security",
                title:
                  "Protecting digital systems through governance and compliance",
                text: "We deliver ISO 27001:2022 audits, GDPR compliance, and risk assessments for data-driven organisations.",
              },
              {
                image: "/service-4.png",
                tag: "Policy",
                title:
                  "Shaping policy and regulation for a digital-first world",
                text: "We advise governments and institutions on blockchain integration, AI regulation, and sustainability-focused legal frameworks.",
              },
              {
                image: "/service-5.png",
                tag: "Compliance",
                title:
                  "Custom anti-money laundering and risk frameworks for digital assets",
                text: "Our team designs bespoke AML programs and compliance strategies to help mitigate risks in digital finance ecosystems.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={410}
                  height={258}
                  className="w-full h-auto rounded-[4px] bg-contain bg-center bg-no-repeat"
                />
                <div className="px-4 md:px-[22px] space-y-4">
                  <div className="py-1 px-[18px] bg-cta-btn w-fit">
                    <p className="text-white text-base/7 md:text-lg/8 tracking-[-2%] font-medium">
                      {item.tag}
                    </p>
                  </div>
                  <h6 className="text-xl/[30px] md:text-[25px]/[35px] tracking-[-2%] font-semibold text-bg">
                    {item.title}
                  </h6>
                  <p className="text-body/90 text-sm/5 md:text-base/6 tracking-[-2%]">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="w-full relative bg-primary flex items-center justify-center">
        <Image
          src="/home-research-bg.png"
          alt="cta-bg"
          fill
          className="object-cover bg-no-repeat absolute inset-0"
        />
        <div className="absolute lg:left-1/2 lg:-translate-x-1/2 max-lg:right-0 max-lg:bottom-0 lg:top-4/5">
          <svg
            width="146"
            height="58"
            viewBox="0 0 146 58"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.0809 43.6752C49.5874 42.7379 52.6478 40.9403 55.8413 39.449C68.8865 33.3451 82.0001 27.5021 95.5186 22.5427C106.157 18.6561 116.809 14.9148 127.84 12.2323C129.549 11.8077 131.707 11.7365 132.115 9.00573C130.54 8.77033 128.98 8.42991 127.419 8.33978C123.906 8.137 120.367 8.10923 116.814 7.93623C115.392 7.86703 113.987 7.69281 112.597 7.41355C109.432 6.79749 108.178 5.60797 108.331 3.62651C108.494 1.57503 110.028 0.408444 112.972 0.347252C115.561 0.268761 118.159 0.37057 120.742 0.327087C126.41 0.243338 132.053 0.0843386 137.72 0.000588042C138.902 -0.00183516 140.083 -0.0042737 141.233 0.203358C144.333 0.773946 146.038 3.49824 145.158 6.51631C144.779 7.85553 144.119 9.15287 143.306 10.2841C141.164 13.3641 138.662 16.2116 136.65 19.3826C133.782 23.9648 131.243 28.7394 128.569 33.4581C127.405 35.5031 126.435 37.6846 125.081 39.5582C124.495 40.3655 123.079 40.9771 122.083 40.9357C120.582 40.926 119.623 39.6734 119.232 38.2191C118.622 35.8372 119.072 33.5423 119.942 31.3101C120.935 28.7383 121.933 26.1315 122.997 23.3199C120.783 22.0941 119.059 23.0893 117.404 23.6294C101.687 28.6898 86.2452 34.5429 71.2278 41.3901C60.5133 46.2673 49.8479 51.2951 39.1579 56.2477C38.5052 56.5438 37.851 57.0903 37.2155 57.0312C35.8747 56.9024 34.1577 56.8964 33.3468 56.0952C32.5709 55.2992 32.2426 53.4248 32.5604 52.2554C33.1089 50.2615 34.312 48.437 35.2404 46.5356C37.5445 41.6543 39.9887 36.794 42.0933 31.8114C42.9114 29.9293 43.1709 27.7133 43.3045 25.6215C43.4465 22.9942 41.993 21.7033 39.42 21.6768C38.4888 21.6808 37.5226 21.6796 36.6003 21.8639C27.0918 23.7002 17.8482 26.3992 8.84833 30.101C6.94092 30.8898 6.64234 32.1695 6.84115 33.9529C4.56795 34.7944 2.28947 35.6708 0.56392 33.0866C-0.720183 31.1409 0.216621 28.7039 3.08417 26.5196C4.3771 25.5317 5.79964 24.6347 7.26601 23.9233C16.4212 19.4215 26.0286 16.2041 36.0815 14.5566C46.5755 12.8318 51.8874 18.2425 50.1781 28.7244C49.6618 31.9401 48.3754 35.0406 47.369 38.1831C46.8639 39.6466 46.1436 41.1138 45.0809 43.6752Z"
              fill="#FF6B6B"
            />
          </svg>
        </div>

        <p className="absolute text-center max-lg:bottom-0 lg:top-[75%] left-10 md:left-[25%]  font-bold text-2xl md:text-[35px] text-white">
          Your Future-Focused <br />{" "}
          <span className="text-secondary">Legal</span> Partner
        </p>

        <div className="relative mw flex items-center justify-between gap-8 max-lg:flex-col px-4 md:px-10 lg:px-20 py-16 lg:py-[127px]">
          <div className="lg:max-w-[602px] lg:max-h-[481px]">
            <Image
              src="/research-robot.png"
              alt="robot"
              width={602}
              height={481}
              // className="w-full h-auto"
            />
          </div>

          <div className="lg:max-w-[536px] space-y-7 text-base/6 md:text-xl/[28px] font-medium text-white">
            <div className="flex gap-2 items-baseline">
              <div className="size-1 bg-white rounded-full shrink-0" />
              <p>
                AI-Enhanced Research — Harness artificial intelligence to
                analyse global tech regulations and case summaries faster.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <div className="size-1 bg-white rounded-full shrink-0" />
              <p>
                Smart Compliance Audits — Automate compliance checks for
                frameworks like GDPR, ISO 27001, and NDPA.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <div className="size-1 bg-white rounded-full shrink-0" />
              <p>
                AI Governance Frameworks — Develop responsible, ethical AI usage
                policies for organisations and governments.
              </p>
            </div>
            <div className="flex gap-2 items-baseline">
              <div className="size-1 bg-white rounded-full shrink-0" />
              <p>
                Predictive Legal Insights — Stay ahead of emerging laws and
                policy trends in digital assets, fintech, and data governance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full relative flex items-center justify-center">
        <div className="mw flex flex-col gap-[50px] py-10 lg:py-16 px-4 md:px-10 lg:px-20">
          <h4 className="text-2xl md:text-[45px]/[60px] font-medium tracking-[-2%] text-black">
            Case Studies
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10">
            {[
              {
                title:
                  "Advising a Blockchain Startup on Global Licensing and Token Compliance",
                tag: "Digital Assets",
              },
              {
                title:
                  "Designing an AI Governance Framework for an African Regulatory Agency",
                tag: "Policy & AI",
              },
              {
                title:
                  "Guiding a Fintech Company Through ISO 27001 and AML Compliance Audit",
                tag: "Policy & AI",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex flex-col justify-end h-[496px] gap-4 px-3 md:px-[18px] pb-8 md:pb-14 relative"
              >
                <Image
                  src={`/case-study-${i + 1}.jpg`}
                  fill
                  alt={item.title}
                  className="object-cover bg-no-repeat absolute inset-0"
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 bg-[url('/lines.png')] bg-fill bg-center bg-no-repeat" />

                <div className="relative space-y-[18px]">
                  <h6 className="text-white text-2xl md:text-[35px] leading-[100%] font-medium">
                    {item.title}
                  </h6>
                  <p className="text-cta-btn text-lg md:text-[22px] leading-[100%] font-semibold">
                    {item.tag}
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
