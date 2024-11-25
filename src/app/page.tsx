import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import WorkExperience from "@/components/WorkExperience";
import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-white dark:bg-black'>
      <div className='max-w-5xl mx-auto w-full border border-red-500'>
        <Navbar />
        <Hero />
        <WorkExperience />
      </div>
    </div>
  );
}
