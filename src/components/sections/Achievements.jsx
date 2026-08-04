import { faChevronCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const achievements = [
  {
    title: "Học bổng Khuyến khích",
    desc: "Đạt học bổng học tập xuất sắc từ nhà trường trong năm 2024 nhờ thành tích học tập xuất sắc.",
    tag: "Học tập",
  },
  {
    title: "Hoàn thành dự án",
    desc: "Xây dựng và phát triển thành công nhiều dự án thực hành lớn nhỏ (cá nhân & nhóm) từ frontend đến backend.",
    tag: "Sản phẩm",
  },
  {
    title: "Tự học & Nghiên cứu",
    desc: "Chủ động mở rộng kiến thức mới ngoài chương trình giảng dạy, nghiên cứu Docker, Cloud và CI/CD cơ bản.",
    tag: "Kỹ năng",
  },
];
function Achievements() {
  return (
    <section
      id="achievements"
      className="py-24 px-6 bg-white border-t border-slate-100/60"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            Thành tựu
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Thành Tựu & Đóng Góp
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((ach, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-slate-50/50 hover:bg-white hover:shadow-md border border-slate-100 hover:border-slate-200/80 rounded-2xl transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                <span className="px-2 py-0.5 bg-indigo-50 text-primary text-[10px] font-bold rounded uppercase tracking-wider mb-4 inline-block">
                  {ach.tag}
                </span>
                <h3 className="text-sm font-bold text-slate-900 mb-2">
                  {ach.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Achievements;
