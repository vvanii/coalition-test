import { forwardRef } from "react";
import { cn } from "@/lib";
import { cva, type VariantProps } from "class-variance-authority";

const textVariants = cva("text-[#072635] tracking-[0px]", {
  variants: {
    variant: {
      "body-regular": "font-normal text-[14px] leading-[19px]",
      "body-emphasized": "font-bold text-[14px] leading-[19px]",
      "card-title": "font-extrabold text-[24px] leading-[33px]",
      "manrope-medium-16px":
        "font-meduim text-[16px] leading-[22px] capitalize",
      "manrope-extrabold-30px": "font-extrabold text-[30px] leading-[41px]",
      "manrope-regular-12px": "font-normal text-[12px] leading-[17px]",
      "inner-card-title": "font-bold text-[18px] leading-[24px] capitalize",
      "manrope-bold-14px": "font-bold text-[14px] leading-[19px] capitalize",
      "manrope-bold-22px": "font-bold text-[22px] leading-[30px] capitalize",
      "manrope-medium-14px":
        "font-medium text-[14px] leading-[19px] capitalize",
      "manrope-regular-14px":
        "font-normal text-[14px] leading-[19px] capitalize",
      "manrope-regular-13px":
        "font-normal text-[13px] leading-[18px] capitalize",
      "body-secondary-info":
        "font-normal text-[14px] leading-[19px] text-[#707070]",
    },
  },
  defaultVariants: {
    variant: "body-regular",
  },
});

interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof textVariants> {
  children: React.ReactNode;
}

export const Text = forwardRef<HTMLParagraphElement, TextProps>(
  ({ children, variant, className, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </p>
    );
  },
);
Text.displayName = "Text";
