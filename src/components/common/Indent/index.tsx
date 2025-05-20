type IndentProps = {
  children: React.ReactNode;
};

export function Indent({ children }: IndentProps) {
  return <div className="indent">{children}</div>;
}
