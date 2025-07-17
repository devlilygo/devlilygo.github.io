import classNames from "classnames";

// styles
const style = {
  container: classNames("flex", "flex-col", "items-center", "w-[300px]"),
  cityNameArea: classNames(
    "flex",
    "justify-between",
    "text-sm",
    "text-white/80",
    "w-full",
    "mb-1"
  ),
  routeArea: classNames(
    "relative",
    "w-full",
    "h-1",
    "bg-white/90",
    "rounded-full",
    "overflow-visible"
  ),
  emojiArea: classNames(
    "absolute",
    "left-0",
    "top-[-12px]",
    "text-xl",
    "animate-plane",
    "rotate-emoji"
  ),
};

export default function SeoulToTorontoBar() {
  return (
    <div className={style.container}>
      <div className={style.cityNameArea}>
        <span>Seoul 🇰🇷</span>
        <span>🇨🇦 Toronto</span>
      </div>

      <div className={style.routeArea}>
        <div className={style.emojiArea}>✈️</div>
      </div>
    </div>
  );
}
