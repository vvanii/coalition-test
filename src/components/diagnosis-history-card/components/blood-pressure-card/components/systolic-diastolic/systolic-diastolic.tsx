import { useFetchJessicaTaylor } from "@/hooks";
import { ChevronDownIcon, ChevronUpIcon, Divider, Text } from "@core/ui";

export const SystolicDiastolic: React.FC = () => {
  const { data } = useFetchJessicaTaylor();

  if (!data) return null;

  return (
    <div>
      <div className="space-y-[8px]">
        <div className="flex items-center">
          <span className="w-[14px] h-[14px] rounded-full bg-[#E66FD2] mr-[4px] border border-white" />
          <Text variant={"manrope-bold-14px"}>Systolic</Text>
        </div>
        <Text variant={"manrope-bold-22px"}>
          {data.diagnosis_history[0].blood_pressure.systolic.value}
        </Text>
        <div className="flex items-center space-x-[8px]">
          <ChevronUpIcon />
          <Text variant={"manrope-regular-14px"}>Higher than Average</Text>
        </div>
      </div>
      <div className="flex my-[16px]">
        <Divider type={"horizontal"} className="bg-[#CBC8D4]" />
      </div>
      <div className="space-y-[8px]">
        <div className="flex items-center">
          <span className="w-[14px] h-[14px] rounded-full bg-[#8C6FE6] mr-[4px] border border-white" />
          <Text variant={"manrope-bold-14px"}>Diastolic</Text>
        </div>
        <Text variant={"manrope-bold-22px"}>
          {data.diagnosis_history[0].blood_pressure.diastolic.value}
        </Text>
        <div className="flex items-center space-x-[8px]">
          <ChevronDownIcon />
          <Text variant={"manrope-regular-14px"}>Lower than Average</Text>
        </div>
      </div>
    </div>
  );
};
