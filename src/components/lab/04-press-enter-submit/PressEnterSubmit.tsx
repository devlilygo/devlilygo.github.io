"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";

const PressEnterSubmit = () => {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!query.trim()) return;
    setSubmitted(query);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); // prevent form submission (optional)
      handleSubmit();
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-4">
      <Input
        type="text"
        placeholder="Type something and press Enter"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        className="w-64"
      />
      {submitted && (
        <div className="text-sm text-muted-foreground">
          ✅ You submitted: <span className="font-medium">{submitted}</span>
        </div>
      )}
    </div>
  );
};

export default PressEnterSubmit;
