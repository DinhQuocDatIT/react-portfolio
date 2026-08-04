import { faVuejs } from "@fortawesome/free-brands-svg-icons";
import { faCode, faDatabase, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FontAwesomeIcon icon={faVuejs} className="w-5 h-5 text-primary" />,
    skills: [
      { name: "ReactJS", level: "Thành thạo" },
      { name: "JavaScript (ES6+)", level: "Thành thạo" },
      { name: "Tailwind CSS", level: "Cơ bản" },
      { name: "HTML5 & CSS3", level: "Thành thạo" },
      { name: "CSS Modules", level: "Thành thạo" },
      { name: "Responsive Design", level: "Thành thạo" },
    ],
  },
  {
    title: "Backend Development",
    icon: <FontAwesomeIcon icon={faCode} className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Java", level: "Thành thạo" },
      { name: "Spring Boot", level: "Thành thạo" },
      { name: "RESTful API", level: "Thành thạo" },
      { name: "Spring Security JWT", level: "Thành thạo" },
      { name: "JPA / Hibernate", level: "Thành thạo" },
    ],
  },
  {
    title: "Database Management",
    icon: (
      <FontAwesomeIcon icon={faDatabase} className="w-5 h-5 text-primary" />
    ),
    skills: [
      { name: "MySQL", level: "Cơ bản" },
      { name: "SQL Server", level: "Cơ bản" },
    ],
  },
  {
    title: "Tools & Infrastructure",
    icon: <FontAwesomeIcon icon={faTools} className="w-5 h-5 text-primary" />,
    skills: [
      { name: "Git & GitHub", level: "Thành thạo" },
      { name: "Docker", level: "Thành thạo" },
      { name: "Postman", level: "Thành thạo" },
      { name: "Google Cloud Platform", level: "Cơ bản" },
      { name: "Jira", level: "Quen thuộc" },
    ],
  },
];
function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6 bg-white border-t border-slate-100/60"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
            Kỹ năng
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Công Nghệ & Kỹ Năng
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:border-slate-300/80 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-50">
                <div className="p-2 rounded-xl bg-indigo-50 border border-indigo-100/20">
                  {category.icon}
                </div>
                <h3 className="font-bold text-slate-900 text-[15px]">
                  {category.title}
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3.5">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3 bg-slate-50/50 hover:bg-slate-50 border border-slate-100 rounded-xl transition-all duration-200 flex flex-col items-start"
                  >
                    <span className="text-[13px] font-bold text-slate-800 mb-1">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-semibold text-indigo-600/80 bg-indigo-50/50 px-1.5 py-0.5 rounded-md">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default Skills;
