import { ArrowDownIcon, Card, Text } from "@core/ui";
import { BloodPressureGraph, SystolicDiastolic } from "./components";

export const BloodPressureCard: React.FC = () => {
  return (
    <Card className="shadow-none bg-[#F4F0FE] w-[726px] h-[298px] p-[16px]">
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <div className="flex items-center justify-between">
            <Text variant={"inner-card-title"}>Blood Pressure</Text>
            <button className="flex items-center">
              <Text variant={"body-regular"}>Last 6 months</Text>
              <ArrowDownIcon className="ml-[16px]" />
            </button>
          </div>
          <div className="mt-[20px]">
            <BloodPressureGraph />
          </div>
        </div>
        <div className="col-span-1 ml-[48px]">
          <SystolicDiastolic />
        </div>
      </div>
    </Card>
  );
};
