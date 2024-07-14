import { cn } from "@/lib";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl shadow-md shadow-[#efefef]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
