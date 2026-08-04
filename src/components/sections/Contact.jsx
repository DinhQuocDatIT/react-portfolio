import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faFileDownload,
  faLocationPin,
  faMailBulk,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("dinhquocdat2005thdgli@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-slate-50/40 border-t border-slate-150 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left">
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-primary uppercase tracking-widest block mb-2">
                Liên hệ
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-4">
                Kết Nối Với Mình
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed mb-8">
                Bạn có câu hỏi, ý tưởng dự án hoặc cơ hội cộng tác? Đừng ngần
                ngại liên lạc với mình nhé!
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/50 flex items-center justify-center text-slate-600 shadow-sm">
                    <FontAwesomeIcon icon={faMailBulk} className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Email
                    </p>
                    <button
                      onClick={handleCopyEmail}
                      className="text-[13px] font-semibold text-slate-700 hover:text-primary transition-colors flex items-center gap-1.5"
                    >
                      dinhquocdat2005thdgli@gmail.com
                      {copiedEmail ? (
                        <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 rounded flex items-center gap-0.5">
                          <FontAwesomeIcon
                            icon={faCheck}
                            className="w-2.5 h-2.5"
                          />
                          đã sao chép
                        </span>
                      ) : null}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/50 flex items-center justify-center text-slate-600 shadow-sm">
                    <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Github
                    </p>
                    <a
                      href="https://github.com/DinhQuocDatIT"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] font-semibold text-slate-700 hover:text-primary transition-colors"
                    >
                      github.com/DinhQuocDatIT
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200/50 flex items-center justify-center text-slate-600 shadow-sm">
                    <FontAwesomeIcon icon={faLocationPin} className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      Địa điểm
                    </p>
                    <p className="text-[13px] font-semibold text-slate-700">
                      Thành phố Hồ Chí Minh, Việt Nam
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm">
            <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
              Hợp tác
            </span>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Sẵn sàng tham gia các dự án mới
            </h3>

            <p className="text-sm text-slate-600 leading-7 mb-8">
              Mình là một lập trình viên đam mê công nghệ, thích khám phá và xây
              dựng những sản phẩm có tính ứng dụng thực tế. Mình luôn cố gắng
              học hỏi, cải thiện kỹ năng và biến những ý tưởng thành các sản
              phẩm hoàn chỉnh.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-8">
              <a
                href="https://github.com/DinhQuocDatIT"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-slate-900 hover:bg-slate-850 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <FontAwesomeIcon icon={faGithub} className="w-3.5 h-3.5" />
                GitHub
              </a>
              <a
                href="/DinhQuocDat_Frontend_Intern_CV.pdf"
                className="px-4 py-2 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
              >
                <FontAwesomeIcon icon={faFileDownload} />
                Tải CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Contact;
