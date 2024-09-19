"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  fileUrl: string;
  fileName: string;
}

export function EnhancedResumeDownload({
  fileUrl,
  fileName,
}: DownloadButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadFile = useCallback(async () => {
    setIsDownloading(true);
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error("Download failed");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download error:", error);
      alert("Failed to download the file. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  }, [fileUrl, fileName]);

  return (
    <div className="flex items-center justify-cente lg:justify-start">
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
        onClick={downloadFile}
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
    </div>
  );
}
