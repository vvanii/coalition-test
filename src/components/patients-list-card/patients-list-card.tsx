import { Card, MagnifyingGlassIcon, ScrollArea, ScrollBar, Text } from "@core";
import { SelectPatient } from "@/components";
import { useFetchPatients } from "@/hooks";

export const PatientsListCard: React.FC = () => {
  const { data: patients } = useFetchPatients();

  return (
    <Card className="w-[367px] h-[1054px]">
      <div className="flex justify-between items-center mb-[40px] p-[20px]">
        <Text variant={"card-title"}>Patients</Text>
        <MagnifyingGlassIcon />
      </div>
      <ScrollArea className="h-[920px] mr-[4px]">
        {patients.map((patient, i) => (
          <div
            key={i}
            className="py-[16px]"
          >
            <SelectPatient {...patient} />
          </div>
        ))}
        <ScrollBar orientation="vertical" />
      </ScrollArea>
    </Card>
  );
};
