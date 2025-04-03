// app/page.tsx
import HomeTemplate from "@/components/templates/HomeTemplate";
import classNames from "classnames";
const styles = {
  container: classNames("flex-col", "h-full", "w-full"),
};

/** HOMEPAGE */
export default function HomePage() {
  return (
    <main className={styles.container}>
      <HomeTemplate />
    </main>
  );
}
