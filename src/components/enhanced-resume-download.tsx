"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export function EnhancedResumeDownload() {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const downloadLinkRef = useRef(null);

  useEffect(() => {
    const createDummyPDF = async () => {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF();
      doc.text("This is a dummy resume PDF", 10, 10);
      const pdfBlob = doc.output("blob");
      const url = URL.createObjectURL(pdfBlob);
      downloadLinkRef.current = url;
    };
    createDummyPDF();
  }, []);

  const downloadResume = useCallback(async () => {
    setIsDownloading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulating download time

      const link = document.createElement("a");
      link.href = downloadLinkRef.current;
      link.download = "dummy_resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download error:", error);
    } finally {
      setIsDownloading(false);
    }
  }, []);

  return (
    <Button
      className={`
          relative overflow-hidden px-6 py-3 rounded-full
          bg-gradient-to-r from-blue-500 to-blue-600
          hover:from-blue-600 hover:to-blue-700
          text-white font-semibold text-lg
          transition-all duration-500 ease-in-out
          transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50
          ${isDownloading ? "opacity-75 cursor-not-allowed" : ""}
        `}
      style={{ minWidth: "max-content" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={downloadResume}
      disabled={isDownloading}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={isHovered ? "hovered" : "default"}
          className="flex items-center justify-center w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {isHovered ? (
            <>
              <Download className="h-5 w-5 mr-2" />
              Download
            </>
          ) : (
            "Get Resume"
          )}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}
