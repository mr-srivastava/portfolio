import { AspectRatio } from "../ui/aspect-ratio";
import { GlareCard } from "../ui/glare-card";

export default function HeroCard() {
  return (
    <GlareCard className='w-full p-16'>
      <div className='grid grid-cols-2 gap-x-16'>
        <div className="flex flex-col justify-center">
          <div className='drop-shadow-sm text-[32px] font-semibold tracking-tighter dark:[text-shadow:0_0_40px_hsl(var(--primary)/0.1)] [text-shadow:0_0_20px_hsl(var(--primary)/0.05)] mb-2'>
            Hello there, my name is
          </div>
          <h1 className='drop-shadow-sm text-[50px] font-bold tracking-tighter dark:[text-shadow:0_0_40px_hsl(var(--primary)/0.1)] [text-shadow:0_0_20px_hsl(var(--primary)/0.05)] mb-2'>
            Aadarsh Srivastava
          </h1>
          <div className='drop-shadow-sm text-[24px]  tracking-tighter dark:[text-shadow:0_0_40px_hsl(var(--primary)/0.1)] [text-shadow:0_0_20px_hsl(var(--primary)/0.05)] mb-2'>
            I do all things web!
          </div>
        </div>
        <AspectRatio ratio={1 / 1}>
          <div className='w-full h-full rounded-md bg-neutral-900' />
        </AspectRatio>
      </div>
    </GlareCard>
  );
}
