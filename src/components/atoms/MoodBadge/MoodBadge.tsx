const MoodBadge = ({ mood }: { mood: string }) => {
  return (
    <span className="px-3 py-1 rounded-full bg-violet-100 text-violet-700 text-sm">
      {mood}
    </span>
  );
};

export default MoodBadge;
