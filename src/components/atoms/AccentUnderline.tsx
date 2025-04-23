export const AccentUnderline = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <span className="border-b-2 border-pink-400 pb-0.5 font-semibold inline-block">
    {children}
  </span>
);
