import { Text } from "@core/ui";

export interface PatientInfoBubbleProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

export const PatientInfoBubble: React.FC<PatientInfoBubbleProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <div className="pb-[24px]">
      <div className="flex items-center space-x-[16px]">
        <div className="bg-[#f6f7f8] rounded-full size-[42px] flex items-center justify-center">
          {icon}
        </div>
        <div className="text-left">
          <Text variant="manrope-medium-14px">{title}</Text>
          <Text variant="manrope-bold-14px">{value}</Text>
        </div>
      </div>
    </div>
  );
};
