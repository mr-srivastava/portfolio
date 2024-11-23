interface TechStackProps {
  skills: string[];
}

export function TechStack({ skills }: TechStackProps) {
  return (
    <>
      <h3 className='font-semibold mt-4 mb-2'>Tech Stack:</h3>
      <div className='flex flex-wrap gap-2'>
        {skills.map((skill, index) => (
          <span
            key={index}
            className='bg-white/20 px-2 py-1 rounded-md text-sm'
          >
            {skill}
          </span>
        ))}
      </div>
    </>
  );
}
