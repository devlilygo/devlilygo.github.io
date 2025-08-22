import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";

const DisableSubmitUntilValid = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const isValidEmail = /\S+@\S+\.\S+/.test(email);
  const isValidPassword = password.length >= 8;
  const isFormValid = isValidEmail && isValidPassword;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;
    toast("🎉 Success!", {
      description: "Form submitted successfully.",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-72">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password (min 8 chars)"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button type="submit" disabled={!isFormValid}>
        Submit
      </Button>
    </form>
  );
};

export default DisableSubmitUntilValid;
