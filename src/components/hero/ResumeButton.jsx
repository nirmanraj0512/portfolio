import { useState } from "react";
import { motion } from "framer-motion";

const ResumeButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleDownload = () => {
    if (downloading) return; // Prevent multiple clicks

    setDownloading(true);
    setTimeout(() => {
      setDownloading(false);
      setCompleted(true);
      setTimeout(() => setCompleted(false), 2000); // Reset after 2s
    }, 2000); // Simulate a 2s download time
  };

  return (
    <motion.a
    onClick={(e) => {
        e.preventDefault();
        const newTab = window.open("https://drive.google.com/file/d/1q8ySSg4ZvXulfrZgU6p7zF-ZRa76XCWU/view?usp=sharing", "_blank");
        if (newTab) {
          newTab.blur(); // Sends the new tab to the background
          window.focus(); // Keeps focus on the current page
        }
        handleDownload(); // Triggers animation
      }}
      className="resumeButton"
      whileTap={{ scale: 0.9 }} // Shrinks slightly on click
    >
      {completed ? (
        // ✅ Show Check Mark After Download
        <motion.img
          src="/download.svg"
          alt="Downloaded"
          className="resumeIcon"
        
          transition={{ duration: 0.5 }}
        />
      ) : (
        // 📄 Show Resume Icon While Downloading
        <motion.img
          src={downloading ? "/downloading.svg" : "/download.svg"}
          alt="Download Resume"
          className="resumeIcon"
        //   animate={downloading ? { rotate: 360 } : {}}
        //   transition={{ repeat: downloading ? Infinity : 0, duration: 1 }}
        />
      )}
    </motion.a>
  );
};

export default ResumeButton;
