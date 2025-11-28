import Navbar from "@/components/layout/navbar";
import { jakarta, montserrat } from "../fonts";

export default function page() {
  return (
    <main className="flex flex-col gap-[50px]">
      <section className="flex flex-col bg-[url('/contact-hero-bg.jpg')] text-center bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-black/35" />
        <Navbar />
        <div className="mw px-4 md:px-10 lg:px-20 py-[170px] md:py-[250px] lg:py-[356px] relative flex flex-col items-center justify-center gap-2.5 size-full">
          <h1 className="text-white font-medium text-4xl md:text-[55px]/[65px] lg:text-[60px]/[75px]">
            Contact Us
          </h1>
          <p className="text-base/6 md:text-lg/[28px] text-white">
            Let’s connect and find the right solution for you.
          </p>
        </div>
      </section>
      <section className="flex items-center justify-center relative">
        <div className="mw flex max-lg:flex-col items-center justify-between gap-8 px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-16">
          <div className="lg:max-w-[509px] flex flex-col gap-6 md:gap-10">
            <div className="space-y-5">
              <h5 className="text-xl md:text-[40px] leading-[140%] text-[#131313] font-bold">
                Get in touch
              </h5>
              <p className="text-base md:text-lg leading-[140%] text-[#131313]">
                We’d love to hear from you. Please fill out this form.
              </p>
            </div>
            <form
              className={`${jakarta.className} px-4 flex flex-col gap-4 md:gap-6`}
            >
              <div className="flex max-sm:flex-col gap-4 md:gap-8">
                <div className="space-y-2.5 w-full">
                  <label
                    htmlFor="firstName"
                    className="font-medium text-sm/5 text-gray-7"
                  >
                    First name
                  </label>
                  <input
                    className="border border-[#D0D5DD00] bg-white shadow-[0px_1px_2px_0px_#1018280D] h-11 w-full rounded-[3px] py-2.5 px-[14px] text-base/6 text-[#667085] placeholder:text-[#667085]"
                    id="firstName"
                    name="firstName"
                    placeholder="First name"
                  />
                </div>
                <div className="space-y-2.5 w-full">
                  <label
                    htmlFor="lastName"
                    className="font-medium text-sm/5 text-gray-7"
                  >
                    Last name
                  </label>
                  <input
                    className="border border-[#D0D5DD00] bg-white shadow-[0px_1px_2px_0px_#1018280D] h-11 w-full rounded-[3px] py-2.5 px-[14px] text-base/6 text-[#667085] placeholder:text-[#667085]"
                    id="lastName"
                    name="lastName"
                    placeholder="Last name"
                  />
                </div>
              </div>
              <div className="space-y-2.5 w-full">
                <label
                  htmlFor="email"
                  className="font-medium text-sm/5 text-gray-7"
                >
                  Email
                </label>
                <input
                  className="border border-[#D0D5DD00] bg-white shadow-[0px_1px_2px_0px_#1018280D] h-11 w-full rounded-[3px] py-2.5 px-[14px] text-base/6 text-[#667085] placeholder:text-[#667085]"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                />
              </div>
              <div className="space-y-2.5 w-full">
                <label
                  htmlFor="phoneNumber"
                  className="font-medium text-sm/5 text-gray-7"
                >
                  Phone number
                </label>
                <input
                  className="border border-[#D0D5DD00] bg-white shadow-[0px_1px_2px_0px_#1018280D] h-11 w-full rounded-[3px] py-2.5 px-[14px] text-base/6 text-[#667085] placeholder:text-[#667085]"
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  placeholder="+1(555)000-0000"
                />
              </div>
              <div className="space-y-2.5 w-full">
                <label
                  htmlFor="message"
                  className="font-medium text-sm/5 text-gray-7"
                >
                  Message
                </label>
                <textarea
                  className="border border-[#D0D5DD00] bg-white shadow-[0px_1px_2px_0px_#1018280D] h-[134px] w-full rounded-[3px] py-2.5 px-[14px] text-base/6 text-[#667085] placeholder:text-[#667085]"
                  id="message"
                  name="message"
                  placeholder="Leave us a message..."
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="size-4 border-gray-6 rounded" />
                <p className="text-base/6 text-gray-6">
                  You agree to our friendly privacy policy.
                </p>
              </div>

              <button
                className={`${montserrat.className} w-full h-12 rounded-[5px] py-2 px-8 bg-secondary flex items-center justify-center font-medium text-base text-white`}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="lg:max-w-[623px] grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="space-y-6">
                <div>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="54"
                      height="54"
                      rx="12"
                      fill="#1489CF"
                      fillOpacity="0.06"
                    />
                    <path
                      d="M35.333 41.1667H18.6663C13.6663 41.1667 10.333 38.6667 10.333 32.8333V21.1667C10.333 15.3333 13.6663 12.8333 18.6663 12.8333H35.333C40.333 12.8333 43.6663 15.3333 43.6663 21.1667V32.8333C43.6663 38.6667 40.333 41.1667 35.333 41.1667Z"
                      stroke="#1489CF"
                      strokeWidth="2.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M35.3337 22L30.117 26.1667C28.4003 27.5333 25.5837 27.5333 23.867 26.1667L18.667 22"
                      stroke="#1489CF"
                      stroke-width="2.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
                <h6 className="font-bold text-xl md:text-2xl leading-[140%] text-[#131313]">
                  Email
                </h6>
              </div>
              <p className="text-[#131313] text-base md:text-lg leading-[140%]">
                Our friendly team is here to help.
              </p>
              <a
                href="mailto:hi@agency.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-lg md:text-xl leading-[140%]"
              >
                hi@agency.com
              </a>
            </div>
            <div className="space-y-4">
              <div className="space-y-6">
                <div>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="54"
                      height="54"
                      rx="12"
                      fill="#1489CF"
                      fill-opacity="0.06"
                    />
                    <path
                      d="M43.6163 37.55C43.6163 38.15 43.483 38.7667 43.1997 39.3667C42.9163 39.9667 42.5497 40.5334 42.0663 41.0667C41.2497 41.9667 40.3497 42.6167 39.333 43.0334C38.333 43.45 37.2497 43.6667 36.083 43.6667C34.383 43.6667 32.5663 43.2667 30.6497 42.45C28.733 41.6334 26.8163 40.5334 24.9163 39.15C22.9997 37.75 21.183 36.2 19.4497 34.4834C17.733 32.75 16.183 30.9334 14.7997 29.0334C13.433 27.1334 12.333 25.2334 11.533 23.35C10.733 21.45 10.333 19.6334 10.333 17.9C10.333 16.7667 10.533 15.6834 10.933 14.6834C11.333 13.6667 11.9663 12.7334 12.8497 11.9C13.9163 10.85 15.083 10.3334 16.3163 10.3334C16.783 10.3334 17.2497 10.4334 17.6663 10.6334C18.0997 10.8334 18.483 11.1334 18.783 11.5667L22.6497 17.0167C22.9497 17.4334 23.1663 17.8167 23.3163 18.1834C23.4663 18.5334 23.5497 18.8834 23.5497 19.2C23.5497 19.6 23.433 20 23.1997 20.3834C22.983 20.7667 22.6663 21.1667 22.2663 21.5667L20.9997 22.8834C20.8163 23.0667 20.733 23.2834 20.733 23.55C20.733 23.6834 20.7497 23.8 20.783 23.9334C20.833 24.0667 20.883 24.1667 20.9163 24.2667C21.2163 24.8167 21.733 25.5334 22.4663 26.4C23.2163 27.2667 24.0163 28.15 24.883 29.0334C25.783 29.9167 26.6497 30.7334 27.533 31.4834C28.3997 32.2167 29.1163 32.7167 29.683 33.0167C29.7663 33.05 29.8663 33.1 29.983 33.15C30.1163 33.2 30.2497 33.2167 30.3997 33.2167C30.683 33.2167 30.8997 33.1167 31.083 32.9334L32.3497 31.6834C32.7663 31.2667 33.1663 30.95 33.5497 30.75C33.933 30.5167 34.3163 30.4 34.733 30.4C35.0497 30.4 35.383 30.4667 35.7497 30.6167C36.1163 30.7667 36.4997 30.9834 36.9163 31.2667L42.433 35.1834C42.8663 35.4834 43.1663 35.8334 43.3497 36.25C43.5163 36.6667 43.6163 37.0834 43.6163 37.55Z"
                      stroke="#1489CF"
                      strokeWidth="2.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <h6 className="font-bold text-xl md:text-2xl leading-[140%] text-[#131313]">
                  Phone
                </h6>
              </div>
              <p className="text-[#131313] text-base md:text-lg leading-[140%]">
                Mon-Fri from 8am to 5pm.
              </p>
              <a
                href="tel:+1 (555) 000-0000"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary text-lg md:text-xl leading-[140%]"
              >
                +1 (555) 000-0000
              </a>
            </div>
            <div className="space-y-4">
              <div className="space-y-6">
                <div>
                  <svg
                    width="54"
                    height="54"
                    viewBox="0 0 54 54"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="54"
                      height="54"
                      rx="12"
                      fill="#1489CF"
                      fillOpacity="0.06"
                    />
                    <path
                      d="M26.9998 29.3833C29.8717 29.3833 32.1998 27.0552 32.1998 24.1833C32.1998 21.3115 29.8717 18.9833 26.9998 18.9833C24.1279 18.9833 21.7998 21.3115 21.7998 24.1833C21.7998 27.0552 24.1279 29.3833 26.9998 29.3833Z"
                      stroke="#1489CF"
                      strokeWidth="2.5"
                    />
                    <path
                      d="M13.0325 21.15C16.3159 6.71667 37.6992 6.73333 40.9659 21.1667C42.8825 29.6333 37.6159 36.8 32.9992 41.2333C29.6492 44.4667 24.3492 44.4667 20.9825 41.2333C16.3825 36.8 11.1159 29.6167 13.0325 21.15Z"
                      stroke="#1489CF"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
                <h6 className="font-bold text-xl md:text-2xl leading-[140%] text-[#131313]">
                  Office
                </h6>
              </div>
              <p className="text-[#131313] text-base md:text-lg leading-[140%]">
                Come say hello at our office HQ.
              </p>
              <p className="text-primary text-lg md:text-xl leading-[140%]">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
