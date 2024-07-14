import { cn } from "@/lib";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Skeleton: React.FC<SkeletonProps> = ({ className, ...props }) => (
  <div
    className={cn("bg-[#f1f5f9] rounded-md animate-pulse", className)}
    {...props}
  />
);
