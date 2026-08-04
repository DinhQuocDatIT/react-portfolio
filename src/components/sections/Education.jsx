import { faAward, faCableCar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50/30">
      <div className="text-center mb-16">
        <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
          Học vấn
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          Hành Trình Học Tập
        </h2>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="relative border-l-2 border-indigo-100 pl-8 ml-4 md:ml-8 "
      >
        <div className="absolute -left-[9px] top-1 w-4.5 h-4.5 rounded-full bg-primary border-4 border-white ring-4 ring-indigo-55" />

        <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">
                Đại học Giao thông Vận tải TP.HCM
              </h3>
              <p className="text-slate-600 font-medium text-sm mt-1">
                Ngành học:
                <span className="text-slate-950 font-semibold">
                  Công nghệ thông tin
                </span>
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-50 text-indigo-600 rounded-lg text-xs font-bold">
              <FontAwesomeIcon icon={faCableCar} className="w-3.5 h-3.5" />
              2023 - 2027
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-100">
            <div>
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Điểm số trung bình
              </h4>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-950">
                  3.59
                </span>
                <span className="text-slate-500 text-sm">/ 4</span>
              </div>
            </div>

            <div>
              <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                Thành tích tiêu biểu
              </h4>
              <div className="flex items-start gap-2.5">
                <FontAwesomeIcon
                  icon={faAward}
                  className="w-5 h-5 text-amber-500 shrink-0 mt-0.5"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Học bổng Khuyến khích học tập 2024
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Dành cho sinh viên có thành tích học tập và rèn luyện xuất
                    sắc trong năm học.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
export default Education;
