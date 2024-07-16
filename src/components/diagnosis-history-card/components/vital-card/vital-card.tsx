import { cn } from "@/lib";
import { Card, ChevronDownIcon, Text } from "@core/ui";

export interface VitalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  background_color_hex: string;
  icon: React.ReactNode;
  title: string;
  level: string;
  bpm?: number;
  temperature?: number;
}

export const VitalCard: React.FC<VitalCardProps> = (props) => {
  return (
    <Card
      className={cn(
        "shadow-none w-[228px] h-[242px] p-[16px]",
        props.className,
      )}
      style={{ backgroundColor: props.background_color_hex }}
      {...props}
    >
      <div className="mb-[16px]">{props.icon}</div>
      <div className="mb-[17px]">
        <Text variant={"manrope-medium-16px"}>{props.title}</Text>
        {props.bpm && (
          <Text variant={"manrope-extrabold-30px"}>{props.bpm} bpm</Text>
        )}
        {props.temperature && (
          <Text variant={"manrope-extrabold-30px"}>{props.temperature}°F</Text>
        )}
      </div>
      <div className="flex items-center space-x-[8px]">
        {props.level.includes("Lower than Average") && <ChevronDownIcon />}
        <Text variant={"body-regular"}>{props.level}</Text>
      </div>
    </Card>
  );
};
