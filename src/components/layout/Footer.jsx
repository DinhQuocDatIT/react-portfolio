import { useState } from "react";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText("dinhquocdat2005thdgli@gmail.com");

    setCopiedEmail(true);

    setTimeout(() => {
      setCopiedEmail(false);
    }, 2000);
  };

  return (
    <footer className="border-t border-slate-100 bg-white py-6 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Đinh Quốc Đạt. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
          <a
            href="https://github.com/DinhQuocDatIT"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            GitHub
          </a>

          <button
            onClick={handleCopyEmail}
            className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1.5 relative"
          >
            Email
            {copiedEmail && (
              <span className="absolute left-full ml-2 whitespace-nowrap text-[10px] text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md flex items-center gap-1">
                <FontAwesomeIcon icon={faCheck} className="w-2.5 h-2.5" />
                Đã sao chép
              </span>
            )}
          </button>

          <a href="#hero" className="hover:text-primary transition-colors">
            Về đầu trang
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
