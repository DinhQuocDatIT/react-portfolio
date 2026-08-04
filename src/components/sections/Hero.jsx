import {
  faArrowDown,
  faArrowLeft,
  faArrowRight,
  faDownload,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { span } from "framer-motion/client";

import { faReact } from "@fortawesome/free-brands-svg-icons";
import { profile } from "../../constants/profile";
import { heroimg } from "../../assets";
function Hero({ handleScrollTo }) {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 px-6 overflow-hidden bg-gradient-to-b from-slate-50/50 to-white"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="md:col-span-7 flex flex-col text-left items-start">
          <h2 className="text-slate-900 text-4xl md:text-5xl  font-bold tracking-tight leading-[1.15] mb-4">
            {profile.name}
          </h2>
          <span className="text-primary text-lg md:text-xl mb-6 font-semibold">
            Sinh viên công nghệ thông tin
          </span>
          <p className="text-[15px] text-slate-600 leading-relaxed max-w-xl mb-8">
            Mình yêu thích lập trình, phát triển phần mềm và xây dựng những sản
            phẩm web có trải nghiệm tốt cho người dùng.
          </p>
          <div className="flex flex-wrap gap-2 mb-8">
            {[
              "ReactJS",
              "JavaScript",
              "Tailwind CSS",
              "Java",
              "Spring Boot",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs text-slate-600 font-semibold hover:text-primary hover:border-indigo-200 border border-slate-200/50 rounded-xl px-3.5 py-1.5 bg-slate-50 shadow-sm transition-all "
              >
                {tech}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleScrollTo("projects")}
              className="cursor-pointer px-6 py-3 bg-primary hover:bg-primary-hover text-white font-semibold text-[14px] rounded-xl transition-all duration-200 shadow-indigo-100 flex items-center gap-1.5 group"
            >
              Xem dự án{" "}
              <FontAwesomeIcon
                icon={faArrowRight}
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
              />
            </button>
            <a
              href="/Frontend_Intern_DinhQuocDat_CV.pdf"
              target="_blank"
              className=" cursor-pointer px-6 py-3 bg-white text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-all"
            >
              <FontAwesomeIcon
                icon={faDownload}
                className="w-4 h-4 text-slate-500"
              />
              Tải CV
            </a>
          </div>
        </div>
        <div className="group  relative border border-slate-200 p-2 rounded-3xl shadow-lg shadow-slate-100">
          <span className="  hidden md:flex absolute bottom-6 -left-8 bg-white border border-slate-200 rounded-[6px] px-2 py-1 text-slate-900 font-semibold flex items-center gap-1 animate-floating">
            <FontAwesomeIcon
              icon={faReact}
              className="text-[#61DBFB] text-[20px]"
            />
            ReactJS
          </span>
          <img src={heroimg} alt="hero" className="h-80 w-120 rounded-3xl" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
