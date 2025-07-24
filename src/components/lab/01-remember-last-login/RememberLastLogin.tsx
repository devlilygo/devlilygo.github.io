"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import classNames from "classnames";
import { useEffect, useState } from "react";
import SocialLoginButton from "./SocialLoginButton";

const LOGIN_KEYS = ["google", "facebook", "twitter"] as const;
type LoginMethod = (typeof LOGIN_KEYS)[number];

const style = {
  conatiner: classNames(
    "flex",
    "flex-col",
    "w-full",
    "h-80",
    "max-w-md",
    "mx-auto",
    "bg-white",
    "border",
    "shadow-md",
    "rounded-xl",
    "items-center",
    "justify-center"
  ),
  title: classNames("text-lg", "font-semibold", "text-center"),
  content: classNames("flex", "flex-col", "gap-4", "py-4"),
};

export const RememberLastLogin = () => {
  const [lastLogin, setLastLogin] = useState<LoginMethod | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem(
      "last-login-method"
    ) as LoginMethod | null;
    if (saved && LOGIN_KEYS.includes(saved)) {
      setLastLogin(saved);
    }
  }, []);

  // save login method to a local storage
  const handleLogin = (method: LoginMethod) => {
    console.log(`Logging in with: ${method}`);
    localStorage.setItem("last-login-method", method);
    setLastLogin(method);
  };

  return (
    <Card className={style.conatiner}>
      <CardHeader>
        <CardTitle className={style.title}>
          Login using your social accounts
        </CardTitle>
      </CardHeader>
      <CardContent className={style.content}>
        {LOGIN_KEYS.map((method) => (
          <SocialLoginButton
            key={method}
            provider={method}
            lastUsed={lastLogin === method}
            onClick={() => handleLogin(method)}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default RememberLastLogin;
