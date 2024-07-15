import { cn } from "@/lib";
import { Card, Text } from "@core/ui";

export interface VitalCardProps extends React.HTMLAttributes<HTMLDivElement> {
  background_color_hex: string;
  icon: React.ReactNode;
  title: string;
  level: string;
  bpm?: string;
  temperature?: string;
}

export const VitalCard: React.FC<VitalCardProps> = (props) => {
  return (
    <Card
      className={cn(
        "shadow-none w-[228px] h-[242px]",
        props.className,
        `bg-[${props.background_color_hex}]`,
      )}
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
      <Text variant={"body-regular"}>{props.level}</Text>
    </Card>
  );
};
