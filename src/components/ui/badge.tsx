export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
}

export function Badge({ variant = "default", className = "", ...props }: BadgeProps) {
  const variants = {
    default: "bg-primary text-primary-foreground",
    outline: "border border-primary text-primary",
  };

  return (
    <div
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
