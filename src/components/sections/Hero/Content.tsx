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
          <p className=" text-lg lg:text-xl mb-3 lg:mb-6 dark:text-neutral-200 relative z-20 text-center lg:text-left">
            {props.preface || "Hello there,my name is"}
          </p>
          <h1 className="text-3xl lg:text-6xl font-bold dark:text-white relative z-20 text-center lg:text-left ">
            {props.content}
          </h1>
          <p className=" text-xl lg:text-2xl mt-8 dark:text-neutral-200 relative z-20 text-center lg:text-right">
            {props.followup || "I do all things web!"}
          </p>
        </section>
        <Image
          src={`${process.env.NEXT_PUBLIC_URL_ENDPOINT}/${props.src}`}
          alt="profile"
          width={400}
          height={400}
          className=" rounded-3xl relative z-20 drop-shadow"
        />
      </div>
    </>
  );
}
