import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 bg-gray-950 text-center">
      <p className="text-sm text-slate-400">
        Made with ❤️ by{" "}
        <a
          href="https://github.com/yeakiniqra"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
          Yeakin Iqra
        </a>{" "}
        | © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;