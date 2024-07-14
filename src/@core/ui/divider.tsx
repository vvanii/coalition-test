import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";
import type { HtmlHTMLAttributes } from "react";

const dividerVariants = cva("", {
  variants: {
    type: {
      vertical: "flex flex-col w-[1px] h-full",
      horizontal: "flex flex-row h-[1px] w-full",
    },
    variant: {
      lighter: "bg-[#F6F7F8]",
      darker: "bg-[#EDEDED]",
    },
  },
});

interface DividerProps
  extends HtmlHTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof dividerVariants> {}

export const Divider: React.FC<DividerProps> = ({
  variant,
  type,
  className,
  ...props
}) => (
  <span
    className={cn(dividerVariants({ variant, type, className }))}
    {...props}
  />
);
