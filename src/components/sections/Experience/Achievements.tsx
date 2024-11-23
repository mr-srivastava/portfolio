interface KeyAchievementsProps {
  achievements: string[];
}

export function Achievements({ achievements }: KeyAchievementsProps) {
  return (
    <>
      <h3 className='font-semibold mb-2'>Key Achievements:</h3>
      <ul className='list-disc list-inside space-y-1'>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
    </>
  );
}
