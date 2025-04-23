export default function SeoulToTorontoBar() {
  return (
    <div className="flex flex-col items-center w-[300px]">
      <div className="flex justify-between text-sm text-white/80 w-full mb-1">
        <span>Seoul 🇰🇷</span>
        <span>🇨🇦 Toronto</span>
      </div>

      <div className="relative w-full h-1 bg-white/90 rounded-full overflow-visible">
        <div className="absolute left-0 top-[-12px] text-xl animate-plane rotate-emoji">
          ✈️
        </div>
      </div>
    </div>
  );
}
