import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGem, faMicrochip } from "@fortawesome/free-solid-svg-icons";
import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
const strengths = [
  {
    icon: <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-indigo-600" />,
    title: "Đam mê lập trình",
    desc: "Thích viết code để giải quyết các bài toán thực tế, yêu thích sự kết hợp giữa logic backend và trải nghiệm trực quan frontend.",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faMicrochip} className="w-5 h-5 text-indigo-600" />
    ),
    title: "Tư duy giải quyết vấn đề",
    desc: "Phân tích kỹ lưỡng yêu cầu hệ thống, chú trọng thiết kế cấu trúc code sạch (clean code) và dễ bảo trì.",
  },
  {
    icon: (
      <FontAwesomeIcon icon={faLeanpub} className="w-5 h-5 text-indigo-600" />
    ),
    title: "Khả năng tự học tốt",
    desc: "Chủ động tiếp cận và tìm hiểu các thư viện, framework hay công cụ mới để áp dụng ngay vào các dự án cá nhân.",
  },
  {
    icon: <FontAwesomeIcon icon={faGem} className="w-5 h-5 text-indigo-600" />,
    title: "Giá trị thực tế",
    desc: "Không chỉ dừng lại ở bài tập, mình hướng tới xây dựng những sản phẩm hoàn thiện, có ích và giải quyết nhu cầu thực tế.",
  },
];
function AboutMe() {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-white border-y border-slate-100/60"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Giới thiệu
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-6">
            Về Bản Thân Mình
          </h2>
          <p className="text-[16px] md:text-[17px] text-slate-650 leading-relaxed max-w-3xl mx-auto mb-16">
            Mình là sinh viên Công nghệ thông tin với niềm đam mê phát triển
            phần mềm. Mình tập trung xây dựng các sản phẩm công nghệ, tìm hiểu
            những công nghệ hiện đại và không ngừng cải thiện kỹ năng để tạo ra
            những sản phẩm có tính ứng dụng thực tế.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {strengths.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 bg-slate-50/50 hover:bg-slate-50 border border-slate-105 rounded-2xl transition-all duration-300 group hover:border-slate-200/80"
            >
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-slate-100 mb-4 transition-transform group-hover:scale-105">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-905 mb-2">
                {item.title}
              </h3>
              <p className="text-[13.5px] text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default AboutMe;
