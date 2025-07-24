"use client";

import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { FaGoogle, FaFacebookF, FaTwitter } from "react-icons/fa";
import classNames from "classnames";

type Provider = "google" | "facebook" | "twitter";

const ICONS = {
  google: <FaGoogle className="text-white" />,
  facebook: <FaFacebookF className="text-white" />,
  twitter: <FaTwitter className="text-white" />,
};

const LABELS = {
  google: "Continue with Google",
  facebook: "Continue with Facebook",
  twitter: "Continue with Twitter",
};

const BG = {
  google: "bg-red-500 hover:bg-red-600",
  facebook: "bg-blue-600 hover:bg-blue-700",
  twitter: "bg-sky-500 hover:bg-sky-600",
};

const style = {
  container: classNames("relative w-full"),
  socialButton: classNames(
    "w-full",
    "items-center",
    "justify-start",
    "px-4",
    "py-5",
    "text-white",
    "font-medium",
    "rounded-full",
    "gap-4",
    "text-sm",
    "pr-24"
  ),
  lastUsedTextbox: classNames(
    "relative",
    "bg-white",
    "text-muted-foreground",
    "text-xs",
    "px-2",
    "py-1",
    "rounded-md",
    "shadow-sm",
    "whitespace-nowrap",
    "italic"
  ),
};

interface Props {
  provider: Provider;
  lastUsed?: boolean;
  onClick: () => void;
}

export const SocialLoginButton = ({ provider, lastUsed, onClick }: Props) => {
  return (
    <div className={style.container}>
      <Button
        onClick={onClick}
        className={classNames(style.socialButton, BG[provider])}
      >
        <span className="text-xl">{ICONS[provider]}</span>
        {LABELS[provider]}

        {/* "Last Used" text */}
        <AnimatePresence>
          {lastUsed && (
            <motion.div
              initial={{ opacity: 0, y: -4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
              className="absolute right-4 top-1/5 -translate-y-1/2 z-10"
            >
              <div className={style.lastUsedTextbox}>
                Last used
                {/* triangle */}
                <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 -rotate-45 bg-white" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Button>
    </div>
  );
};

export default SocialLoginButton;
