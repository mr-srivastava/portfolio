import { cn } from "@/lib/utils";
import { IHeroContentProps } from "./types";
import Image from "next/image";

export default function HeroContent(props: IHeroContentProps) {
  return (
    <>
      <div
        className={cn(
          "hero-content w-[80%] flex flex-col-reverse lg:flex-row items-center justify-evenly gap-20",
          props.className
        )}
      >
        <section>
          <p className="text-[14px] lg:text-xl mb-3 lg:mb-6 dark:text-neutral-200 relative z-20">
            {props.preface || "Hello there, my name is"}
          </p>
          <h1 className="text-[28px] lg:text-6xl font-bold dark:text-white relative z-20">
            {props.content}
          </h1>
          <p className="text-[16px] lg:text-2xl text-right lg:mt-8 dark:text-neutral-200 relative z-20">
            {props.followup || "I do all things web!"}
          </p>
        </section>
        <div className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] z-20">
          <Image
            src={props.src}
            alt="profile"
            fill
            sizes="(max-width: 768px) 300px, 400px"
            className="object-cover rounded-full drop-shadow"
            priority
          />
        </div>
      </div>
    </>
  );
}
