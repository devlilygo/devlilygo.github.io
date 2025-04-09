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
import Image from "next/image";

const styles = {
  container: classNames(
    "flex",
    "flex-col",
    "h-full",
    "w-full",
    "overflow-hidden"
  ),
  mainContainer: classNames(
    "flex",
    "flex-col",
    "h-full",
    "w-full",
    "items-center",
    "justify-center"
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
  footerContainer: classNames(
    "absolute",
    "bottom-5",
    "flex",
    "flex-col",
    "h-[60px]",
    "w-full",
    "items-center",
    "justify-start"
  ),
};

//NOTE - 랜딩 페이지 (Dashboard)
const HomeTemplate = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <Card className={styles.cardContainer}>
          <CardHeader className={styles.cardHeader}>
            <CardTitle className={styles.cardTitle}>
              <div className="flex items-center">
                <span className="text-6xl font-handwriting">W</span>elco
                <span className="text-6xl font-handwriting">m</span>e to
                <span className="text-6xl font-handwriting">L</span>
                ily<span className="text-6xl font-handwriting">i</span>nit
                <Image
                  className="ml-2 pb-2"
                  alt="lilyinit"
                  src="/images/lilyinit.png"
                  width={50}
                  height={50}
                />
              </div>
              <CardDescription className="italic font-coding text-xs">
                Lilyinit(): where creativity gets initialized.
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
      <div className={styles.footerContainer}>
        <div className="flex items-center justify-center">
          <Image
            src="/images/lilyinit_8bit.png"
            alt="logo"
            width={40}
            height={40}
          />
          <span className="text-sm font-coding italic">lily.init()</span>
        </div>
      </div>
    </div>
  );
};

export default HomeTemplate;
