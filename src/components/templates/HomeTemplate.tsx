"use client";

import classNames from "classnames";
import { format } from "date-fns";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import TaskCard from "../organisms/TaskCard/TaskCard";
import { MessagesCard } from "../organisms/MessagesCard/MessagesCard";
import { EmojiCalendarCard } from "../organisms/EmojiCalendarCard/EmojiCalendarCard";
import { SkillsWorksCard } from "../organisms/SkillsWorksCard/SkillsWorksCard";

const styles = {
  container: classNames(
    "flex",
    "h-full",
    "w-full",
    "items-center",
    "justify-center",
    "bg-background"
  ),
  cardContainer: classNames(
    "w-[1024px]",
    "h-[720px]",
    "mx-auto",
    "p-4",
    "gap-4"
  ),
  cardHeader: classNames("flex", "justify-between", "items-center"),
  cardTitle: classNames("text-4xl"),
  cardContent: classNames("flex", "flex-col", "w-full", "h-full", "gap-4"),
  cardContentRow1: classNames("flex", "w-full", "h-full", "gap-4"),
  cardContentRow2: classNames("flex", "w-full", "h-full", "gap-4"),
  cardFooter: classNames("flex", "justify-between"),
};

//NOTE - 랜딩 페이지 (Dashboard)
const HomeTemplate = () => {
  return (
    <div className={styles.container}>
      <Card className={styles.cardContainer}>
        <CardHeader className={styles.cardHeader}>
          <CardTitle className={styles.cardTitle}>
            <span className="text-6xl font-handwriting">W</span>elco
            <span className="text-6xl font-handwriting">m</span>e to
            <span className="text-6xl font-handwriting">D</span>
            ailil<span className="text-6xl font-handwriting">y</span> 🌷
            <CardDescription className="italic">
              Daily Lily’s personal space for tiny wins
            </CardDescription>
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            {format(new Date(), "EEE MMMM d, yyyy").toUpperCase()}
          </CardDescription>
        </CardHeader>
        <CardContent className={styles.cardContent}>
          <div className={styles.cardContentRow1}>
            <TaskCard />
            <MessagesCard />
          </div>
          <div className={styles.cardContentRow2}>
            <EmojiCalendarCard />
            <SkillsWorksCard />
          </div>
        </CardContent>
        <CardFooter className={styles.cardFooter}></CardFooter>
      </Card>
    </div>
  );
};

export default HomeTemplate;
