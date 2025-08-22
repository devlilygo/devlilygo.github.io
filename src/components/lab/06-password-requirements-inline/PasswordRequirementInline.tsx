import { useState } from "react";

const rules = [
  {
    id: "length",
    label: "At least 8 characters",
    test: (val: string) => val.length >= 8,
  },
  {
    id: "upper",
    label: "One uppercase letter",
    test: (val: string) => /[A-Z]/.test(val),
  },
  {
    id: "number",
    label: "At least one number",
    test: (val: string) => /[0-9]/.test(val),
  },
];

const PasswordRequirementsInline = () => {
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create password"
        className="border p-2 rounded"
      />

      <ul className="text-sm space-y-1">
        {rules.map((rule) => {
          const ok = rule.test(password);
          return (
            <li
              key={rule.id}
              className={
                ok
                  ? "text-green-600 flex items-center gap-1"
                  : "text-gray-500 flex items-center gap-1"
              }
            >
              {ok ? "✔️" : "❌"} {rule.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PasswordRequirementsInline;
