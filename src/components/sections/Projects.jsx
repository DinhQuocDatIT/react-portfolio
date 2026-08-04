import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useState } from "react";
import { motion } from "framer-motion";
import { studyflow, todocloud } from "../../assets";

const projects = [
  {
    id: 1,
    name: "STUDYFLOW",
    type: "PERSONAL PROJECT",
    description:
      "Ứng dụng Single Page Application (SPA) hỗ trợ quản lý quy trình học tập cá nhân toàn diện. Hệ thống giúp người dùng lập kế hoạch, phân bổ công việc theo khung thời gian, theo dõi tiến độ bằng biểu đồ trực quan và tối ưu hiệu suất tự học thông qua giao diện tương tác thời gian thực.",
    tech: "ReactJS + CSS Modules",
    features: [
      "Kiến trúc Component-based linh hoạt",
      "Quản lý State & Lifecycle với React Hooks",
      "Định tuyến mượt mà (React Router DOM)",
      "Dashboard Analytics trực quan",
      "Giao diện chuẩn Responsive UI",
      "Tối ưu CSS với Modular CSS",
    ],
    sourceCodeUrl: "https://github.com/DinhQuocDatIT/study-planner",
    liveDemoUrl: "",
    imageUrl: studyflow,
    deploymentPlatform: "",
  },
  {
    id: 2,
    name: "TODO CLOUD",
    type: "TEAM PROJECT (FULL-STACK)",
    description:
      "Hệ thống quản lý công việc và dự án full-stack nâng cao. Xây dựng theo kiến trúc phân tầng (Controller - Service - Repository) giúp tách biệt rõ ràng giữa xử lý logic và truy xuất dữ liệu. Hệ thống được đóng gói hoàn toàn bằng Docker container và tự động hóa triển khai trên hạ tầng điện toán đám mây Google Cloud Platform (GCP).",
    tech: "ReactJS + Spring Boot + MySQL + Docker",
    features: [
      "Tích hợp Full-stack (ReactJS & Spring Boot REST APIs)",
      "Bảo mật Stateless (Spring Security & JWT)",
      "Tối ưu CSDL với Spring Data JPA / Hibernate",
      "Đóng gói Docker Containers (Multi-stage build)",
      "Triển khai Cloud trên GCP (Compute Engine / Cloud Run)",
    ],
    sourceCodeUrl: "https://github.com/vctanngoc09/todo-cloud",
    liveDemoUrl: "",
    imageUrl: todocloud,
    deploymentPlatform: "Google Cloud Platform (GCP) & Docker Container",
  },
];
function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <section
      id="projects"
      className="py-24 px-6 bg-slate-50/40 border-t border-slate-100"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">
            Dự án
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Sản Phẩm Đã Xây Dựng
          </h2>
        </div>

        <div className="flex flex-col gap-16">
          {projects.map((project) => {
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12 hover:shadow-md transition-all duration-300"
              >
                {/* lLeft */}
                <div className="lg:col-span-5 bg-slate-50 p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-100">
                  <img
                    src={project.imageUrl}
                    alt={project.name}
                    className="cursor-pointer rounded-lg hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(project.imageUrl)}
                  />
                </div>

                {/* right */}
                <div className="lg:col-span-7 p-6 md:p-8 flex flex-col justify-between text-left">
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="text-[10px] font-bold text-primary uppercase tracking-widest">
                        {project.type}
                      </span>
                      <span className="text-[11px] font-bold text-slate-500">
                        {project.tech}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-[13.5px] text-slate-650 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <h4 className="text-[11px] font-bold text-slate-450 uppercase tracking-wider mb-2.5">
                      Điểm nổi bật & Kỹ thuật
                    </h4>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.features.map((feat) => (
                        <span
                          key={feat}
                          className="px-2.5 py-1 bg-slate-50 border border-slate-200/40 rounded-lg text-[10.5px] font-medium text-slate-655"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-4 border-t border-slate-105">
                    <a
                      href={project.sourceCodeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-4 py-2 bg-slate-900 hover:bg-indigo-600 text-white font-semibold text-xs rounded-xl transition-all duration-200 flex items-center gap-1.5"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="w-3.5 h-3.5"
                      />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        <Lightbox
          open={selectedImage !== null}
          close={() => setSelectedImage(null)}
          slides={selectedImage ? [{ src: selectedImage }] : []}
        />
      </div>
    </section>
  );
}
export default Projects;
