import Navbar from "@/components/layout/navbar";
import Link from "next/link";
import { openSans } from "../fonts";
import Image from "next/image";

export default function page() {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col bg-[url('/services-hero-bg.jpg')] bg-cover bg-center bg-no-repeat min-h-screen relative">
        <div className="absolute inset-0 bg-black/20" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-20 lg:py-[160px] relative">
          <div className="w-full space-y-6 max-w-[684px]">
            <h1 className="text-white font-medium text-4xl/[100%] md:text-[55px]/[100%]">
              Specialised compliance and regulatory solutions for the digital
              world.
            </h1>
            <p className="text-white text-sm/5 md:text-base/6">
              Helping businesses navigate emerging technologies with clarity,
              structure, and global compliance expertise ensuring innovation
              stays secure, scalable, and regulation-ready.
            </p>
            <div>
              <Link href={"#services"}>
                <button className="flex items-center justify-center rounded-[5px] h-[50px] w-[204px] bg-secondary text-sm/[140%] tracking-[-2%] text-white font-semibold">
                  Explore Our Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center relative">
        <div className="mw px-4 md:px-10 lg:px-20 py-10 lg:py-16 flex flex-col gap-10 md:gap-16">
          <div className="flex items-center gap-8 max-md:flex-col justify-between">
            <div className="space-y-4 md:space-y-[18px]">
              <p className="text-base md:text-lg leading-[140%] font-bold text-cta-btn">
                Our Services
              </p>
              <h2 className="text-3xl/10 md:text-[50px]/[60px] font-medium text-black tracking-[-2%]">
                Compliance <span className="text-cta-btn">solutions</span> built
                for emerging technologies.
              </h2>
            </div>
            <p className="lg:max-w-[615px] text-sm/6 lg:text-lg/[30px] tracking-[-2%] text-black font-medium">
              We provide structured, technology-driven compliance, regulatory,
              and advisory solutions that help businesses innovate confidently
              in fast-changing digital environments.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-y-12 lg:gap-y-16">
            {[
              {
                image: "/service-1.png",
                tag: "Blockchain Compliance",
                text: "Compliance frameworks, audits, and regulatory support for digital assets, tokenisation, and blockchain products.",
              },
              {
                image: "/service-2.png",
                tag: "Fintech Advisory",
                text: "Regulatory guidance and compliance alignment for fintech products, payments, and digital financial services.",
              },
              {
                image: "/service-3.png",
                tag: "Data & Cyber Governance",
                text: "Data protection, ISO certification support, cybersecurity compliance, and organisational governance frameworks.",
              },
              {
                image: "/service-4.png",
                tag: "AML Frameworks",
                text: "Custom AML programs, risk assessments, and compliance structures for fintech and digital asset ecosystems.",
              },
              {
                image: "/service-5.png",
                tag: "Policy & Regulatory Insights",
                text: "Policy research, digital regulation strategy, and advisory for organisations shaping technology governance.",
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col">
                <Image
                  src={item.image}
                  alt={item.tag}
                  width={410}
                  height={258}
                  className="w-full h-auto rounded-[4px] bg-contain bg-center bg-no-repeat relative z-0"
                />
                <div className="p-4 md:p-[18px] space-y-2 bg-primary rounded-sm rounded-tl-none relative z-1 -mt-9 md:-mt-12 w-[90%] h-full">
                  <h6 className="text-white tracking-[-2%] text-base/7 md:text-lg/[30px] font-bold">
                    {item.tag}
                  </h6>
                  <p className="text-sm/5 md:text-base/6 tracking-[-2%] text-white/75">
                    {item.text}
                  </p>
                  <div>
                    <Link
                      href={"/services/blockchain-compliance"}
                      className="flex items-center gap-2 text-base md:text-lg font-bold text-secondary"
                    >
                      Learn more
                      <span>
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.875 6.70832H0.875M14.875 6.70832L9.04167 12.5417M14.875 6.70832L9.04167 0.874989"
                            stroke="#3B82F6"
                            strokeWidth="1.75"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="flex items-center justify-center relative">
        <div className="mw flex flex-col gap-8 md:gap-[50px] px-4 md:px-10 lg:px-20 py-10 lg:py-20">
          <h4 className="text-3xl/10 md:text-[50px]/[60px] font-medium text-primary">
            What set us apart
          </h4>
          <div className="border-[0.5px] border-foundation-9 w-full flex max-md:flex-col gap-[22px] [&>div]:max-md:border-b-[0.5px] [&>div]:border-foundation-9 [&>div]:border-dashed [&>div]:last:border-0 [&>div]:md:border-r">
            {[
              {
                title: "Tech & Compliance Expertise",
                desc: "Blending technical knowledge with regulatory insight to solve complex challenges in emerging tech sectors.",
              },
              {
                title: "Global Reach, Local Focus",
                desc: "Navigating diverse regulatory environments with precision to ensure seamless compliance worldwide.",
              },
              {
                title: "Research-Backed Results",
                desc: "Backing every strategy with rigorous research, tailored for real-world impact.",
              },
            ].map((item, i) => (
              <div key={i} className="py-5 pl-5 pr-2.5 flex flex-col gap-4">
                <div className="space-y-2.5">
                  <div>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 40 40"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_140_194)">
                        <path
                          d="M30.8998 7.89694L27.1421 11.2967C26.9624 11.4586 26.8566 11.6869 26.8479 11.9283C26.8388 12.1593 26.9197 12.385 27.073 12.5577C26.8711 12.6398 26.6681 12.7035 26.4667 12.744C24.4775 13.1484 22.3383 12.2177 20.6946 12.4666C20.5877 12.4833 20.4846 12.5027 20.3831 12.52C20.1008 12.4476 19.8072 12.3872 19.4952 12.3397C19.2701 12.3057 19.0433 12.2916 18.8177 12.2916C18.1699 12.2933 17.5238 12.4001 16.8819 12.4984C16.2411 12.5976 15.6074 12.6905 15.0099 12.6905C14.6956 12.6905 14.3923 12.6656 14.1008 12.6052C13.7888 12.5437 13.4547 12.4055 13.1156 12.2138C13.1426 12.1226 13.1556 12.0254 13.1524 11.9283C13.1427 11.687 13.0358 11.4587 12.8571 11.2967L9.09947 7.89694C6.87979 6.20523 -1.04787 16.8805 0.115959 18.149C1.27768 19.4176 3.37377 21.3193 3.37377 21.3193C3.54596 21.4861 3.77752 21.5789 4.0183 21.5736C4.25854 21.5687 4.48682 21.4678 4.65205 21.2934L6.0669 19.7998C6.08635 19.8219 6.10627 19.843 6.12362 19.8656C6.24502 20.0059 6.33791 20.1463 6.37463 20.2246C6.5333 20.562 6.9376 21.3847 7.47643 22.3051C7.74627 22.765 8.04971 23.2492 8.37518 23.7112C8.54041 23.9434 8.70986 24.1717 8.88588 24.3876C8.40869 24.9782 8.4119 25.8451 8.93229 26.4319C9.51315 27.0883 10.5156 27.1482 11.1714 26.5669L11.2168 26.5264C10.9345 27.0894 11.0035 27.7912 11.4456 28.291C12.0265 28.9464 13.0284 29.0068 13.6842 28.4255L13.9417 28.1912C13.5892 28.7693 13.6374 29.5337 14.1097 30.067C14.6905 30.7212 15.6924 30.7817 16.3478 30.2025L16.745 29.843C16.3714 30.4259 16.4099 31.207 16.8919 31.7501C17.4727 32.4055 18.4752 32.4665 19.1305 31.8851L19.7707 31.3345C19.8328 31.3637 19.8906 31.3901 19.9461 31.4155L20.3845 31.6713L20.3807 31.6681C20.5982 31.7987 20.8266 31.9045 21.062 31.9785C21.2979 32.0524 21.5419 32.0956 21.7902 32.0956C22.0601 32.0956 22.3359 32.0438 22.5913 31.9294C22.8499 31.8161 23.0868 31.6401 23.2828 31.4176C23.5181 31.1531 23.6735 30.8427 23.7535 30.5194C23.9867 30.6041 24.2312 30.6467 24.4736 30.6467C24.7667 30.6467 25.0592 30.5862 25.3313 30.4664C25.6028 30.3466 25.856 30.1668 26.0649 29.9309C26.324 29.6394 26.4876 29.2923 26.5584 28.9328C26.6966 28.9608 26.8374 28.9766 26.9789 28.9766C27.2709 28.9766 27.564 28.9172 27.8361 28.7963C28.1081 28.6769 28.3603 28.4967 28.5686 28.2613C28.8515 27.9418 29.0215 27.5558 29.0787 27.1606C29.1392 27.166 29.2002 27.1682 29.2601 27.1682C29.6115 27.1682 29.9564 27.0926 30.2749 26.9576C30.5939 26.8216 30.8892 26.6241 31.1284 26.3569C31.3487 26.1059 31.5171 25.8133 31.6364 25.498C31.7546 25.1817 31.8247 24.8443 31.8259 24.4983C31.8259 24.372 31.8161 24.2445 31.7935 24.1183C33.0161 22.7591 33.6622 20.4951 33.9419 19.9012C33.9511 19.8818 33.9608 19.8619 33.9721 19.8418L35.3481 21.2934C35.5121 21.4677 35.7405 21.5687 35.9807 21.5736C36.2226 21.5789 36.4541 21.4861 36.6263 21.3193C36.6263 21.3193 38.7224 19.4176 39.8846 18.149C41.0465 16.8805 33.1199 6.20523 30.8998 7.89694ZM30.449 25.05C30.3799 25.2346 30.2784 25.4041 30.1786 25.5153V25.5142C30.0874 25.6189 29.9449 25.7204 29.7791 25.7916C29.6128 25.8618 29.4256 25.9001 29.2599 25.9001C29.1514 25.9001 29.0514 25.8834 28.971 25.8564C28.9656 25.8542 28.9613 25.8526 28.9564 25.851L27.1476 24.1052C26.8955 23.8623 26.4938 23.8699 26.251 24.1214C26.0075 24.3735 26.0146 24.7751 26.2666 25.018L27.7257 26.4264C27.7311 26.4404 27.736 26.4539 27.743 26.468C27.804 26.5873 27.8342 26.7212 27.8342 26.8539C27.8331 27.058 27.7646 27.2555 27.6194 27.4196C27.5335 27.5168 27.4336 27.5869 27.3241 27.6355C27.2156 27.6841 27.0968 27.709 26.9786 27.709C26.7741 27.7079 26.576 27.6387 26.4108 27.493L26.3735 27.4596C26.3671 27.452 26.3622 27.4434 26.3552 27.4348L24.7692 25.7797C24.5274 25.526 24.1253 25.5173 23.8727 25.7591C23.6196 26.001 23.6108 26.4037 23.8532 26.6563L25.1973 28.0609C25.2006 28.0657 25.2038 28.0716 25.2065 28.0759C25.2881 28.2109 25.3302 28.3664 25.3302 28.5223C25.3302 28.7269 25.2611 28.9251 25.1153 29.0897C25.03 29.1858 24.9296 29.2559 24.82 29.3056C24.711 29.3531 24.5928 29.3769 24.4735 29.3769C24.2699 29.3769 24.0713 29.3078 23.9067 29.1626L23.8823 29.1426L23.3911 28.7486L22.5884 27.8958C22.3481 27.6415 21.9471 27.6296 21.6923 27.8698C21.4375 28.1095 21.4251 28.5122 21.6653 28.7665L22.4281 29.5756C22.5063 29.7084 22.5479 29.8584 22.5479 30.0107C22.5474 30.2137 22.4783 30.4123 22.3336 30.5754C22.2467 30.6741 22.1636 30.7313 22.0778 30.7698C21.9924 30.807 21.9013 30.8269 21.7901 30.8275C21.6892 30.8275 21.5725 30.8097 21.4435 30.7686C21.3135 30.7276 21.1736 30.6639 21.0279 30.5786L21.0241 30.5753L20.8011 30.4457C21.4213 29.8605 21.4694 28.8851 20.8999 28.2423C20.3266 27.5966 19.3436 27.5308 18.6878 28.0868L18.8065 27.9799C19.4613 27.3996 19.5218 26.3972 18.9415 25.7419C18.3606 25.0865 17.3582 25.0261 16.7034 25.6069L16.3153 25.9572C16.6893 25.3759 16.6505 24.5931 16.1679 24.05C15.5876 23.3947 14.5863 23.3337 13.9299 23.9151L13.4143 24.3847C13.6561 23.8362 13.5753 23.1718 13.1515 22.6934C12.5717 22.0376 11.5688 21.9776 10.9134 22.558L9.8208 23.5264C9.68369 23.3541 9.54604 23.1701 9.41111 22.979C8.96416 22.3441 8.54416 21.6359 8.21158 21.0292C7.87799 20.4224 7.62971 19.9151 7.52119 19.6834C7.46401 19.5619 7.39588 19.4508 7.32252 19.3439C7.20815 19.1771 7.0769 19.0222 6.94252 18.8759L12.3093 13.2105C12.7844 13.4993 13.2956 13.7352 13.8472 13.8486C14.2403 13.9284 14.6294 13.9576 15.01 13.9576C15.7349 13.957 16.4318 13.8507 17.0763 13.7514C17.2383 13.7255 17.3975 13.7017 17.5525 13.678C17.0693 14.0116 16.6008 14.4073 16.1015 14.872C14.6813 16.1984 13.4542 17.8183 12.7746 18.5546C12.0945 19.2898 13.3588 20.5659 15.3706 19.9808C17.3829 19.3967 18.2499 17.896 18.2499 17.896L20.7751 16.9897L23.282 17.5635L29.3419 23.0188L30.3885 24.0315L30.4096 24.0488C30.4507 24.0876 30.4831 24.133 30.5111 24.2064C30.5392 24.2798 30.5565 24.3791 30.5565 24.498C30.5569 24.6651 30.5192 24.8654 30.449 25.05Z"
                          fill="#004C99"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_140_194">
                          <rect width="40" height="40" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <h6 className="text-bg text-lg/6 md:text-[22px]/[27px] font-medium">
                    {item.title}
                  </h6>
                </div>
                <p
                  className={`${openSans.className} text-sm/6 md:text-base/[27px] text-body`}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
