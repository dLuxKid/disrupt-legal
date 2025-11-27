import Link from "next/link";
import DisruptLegal from "../icons/disrupt-legal";
import IgIcon from "../icons/ig";
import Linkedin from "../icons/linkedin";
import Whatsapp from "../icons/whatsapp";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center">
      <div className="px-4 md:px-10 lg:px-20 mw py-10 lg:py-[60px]">
        <div className="w-full bg-primary rounded-3xl flex items-center max-lg:flex-col justify-between gap-8 px-6 md:px-10 lg:px-16 py-10 md:py-20 lg:py-[113px]">
          <div className="space-y-6 lg:max-w-[565px] max-lg:text-center">
            <h2 className="text-[55px]/[100%] font-medium text-white">
              Subscribe our newsletter
            </h2>
            <p className="text-lg/6 text-white">
              Stay informed with expert updates on regulation, compliance, and
              emerging technologies shaping the future of law.
            </p>
          </div>
          <form className="space-y-4 w-full lg:max-w-[464px]">
            <p className="text-lg/6 text-white">Stay up to date</p>
            <label
              htmlFor="newsletter"
              className="flex lg:items-center gap-3 max-lg:flex-col"
            >
              <input
                className="h-16 bg-[#48618980] rounded-[5px] w-full lg:w-[282px] px-4 lg:px-8 flex items-center placeholder:text-white text-white text-base"
                name="email"
                type="email"
                id="newsletter"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex items-center justify-center rounded-[5px] h-16 w-[170px] bg-secondary text-lg/6 text-white font-semibold"
              >
                Submit
              </button>
            </label>
          </form>
        </div>
      </div>
      <footer className="flex flex-col items-center gap-10 md:gap-[54px] w-full">
        <div className="mw px-4 md:px-10 lg:px-20 py-10 md:py-[52px] flex justify-between max-lg:flex-col gap-8">
          <div className="lg:max-w-[362px] space-y-5">
            <DisruptLegal />
            <p className="text-body text-lg/6">
              disruptLegal is a technology-centred legal and policy firm
              bridging the gap between innovation and regulation.
            </p>
            <div className="flex gap-4">
              <a href="" target="_blank" rel="noopener noreferrer">
                <IgIcon />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <Whatsapp />
              </a>
            </div>
          </div>
          <div className="flex md:flex-wrap max-md:flex-col gap-6 lg:gap-9">
            <div className="space-y-4">
              <p className="text-black font-semibold text-lg">Quick Links</p>
              <div className="flex flex-col gap-2 text-body text-base/6 font-normal">
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                <Link href={"/services"}>Services</Link>
                <Link href={"/insights"}>Insights</Link>
                <Link href={"/contact-us"}>Contact us</Link>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-black font-semibold text-lg">Our Expertise</p>
              <div className="flex flex-col gap-2 text-body text-base/6 font-normal">
                <Link href={"/"}>Blockchain & Digital Assets</Link>
                <Link href={"/"}>Fintech & Digital Finance</Link>
                <Link href={"/"}>Data Governance & Compliance</Link>
                <Link href={"/"}>Policy & Regulatory Research</Link>
              </div>
            </div>
            <div className="flex gap-4 flex-col text-body text-base/6 font-normal max-w-[228px]">
              <p className="text-black font-semibold text-lg">Address</p>
              <p>
                3rd Floor, City Center Gimbiya Street, Garki Abuja, 23409,
                Nigeria
              </p>
              <a href="mailto:Support@enetinnovative.com">
                Support@enetinnovative.com
              </a>
              <a href="tel:+2349136480204" className="-mt-2.5">
                +234 9136480204
              </a>
            </div>
          </div>
        </div>
        <div className="w-full border-t-[0.5px] border-t-[#0A193199] py-5 px-4 md:px-8 lg:px-10 flex items-center justify-between gap-4 flex-wrap text-lg text-[#0A1931BF]">
          <p>&copy; 2025 Disrupt legal All Rights Reserved</p>
          <p className="flex items-center gap-2.5">
            <span>Privacy policy</span>
            <span className="size-2 bg-[#0A1931CC] rounded-full" />
            <span>Terms of Service</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
