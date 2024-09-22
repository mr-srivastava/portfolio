"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { downloadFile } from "@/utils/fileDownload";

interface DownloadButtonProps {
  fileName: string;
  label?: string;
}

export function EnhancedResumeDownload({
  fileName,
  label = "Get Resume",
}: DownloadButtonProps) {
  // State for hover and download status
  const [isHovered, setIsHovered] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  // Handle the download process
  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    try {
      await downloadFile(fileName);
    } catch (error) {
      console.error("Download error:", error);
      // TODO: Consider adding user-facing error handling here
    } finally {
      setIsDownloading(false);
    }
  }, [fileName]);

  return (
    <div className="flex items-center justify-center lg:justify-start">
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
        onClick={handleDownload}
        disabled={isDownloading}
      >
        {/* Animated content for the button */}
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
              label
            )}
          </motion.span>
        </AnimatePresence>
      </Button>
    </div>
  );
}
