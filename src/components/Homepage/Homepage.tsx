"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Menubar from "../Menubar/Menubar";
import MainContent from "../MainContent/MainContent";

export default function Homepage() {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1  border border-neutral-200 dark:border-neutral-700 overflow-hidden",
        "h-screen"
      )}
    >
      <Menubar open={open} setOpen={setOpen} />
      <MainContent />
    </div>
  );
}
