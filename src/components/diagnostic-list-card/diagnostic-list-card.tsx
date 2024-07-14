import { useFetchJessicaTaylor } from "@/hooks";
import { Card, Divider, Text, ScrollArea, ScrollBar } from "@core/ui";

export const DiagnosticListCard: React.FC = () => {
  const { data } = useFetchJessicaTaylor();

  if (!data) return null;

  return (
    <Card className="p-[20px] w-[766px] h-[349px]">
      <Text variant={"card-title"}>Diagnostic List</Text>

      <div className="mt-[40px] w-[726px]">
        <div className="bg-[#F6F7F8] rounded-[24px] py-[14px] px-[16px] grid grid-cols-4 gap-[16px]">
          <Text variant={"body-emphasized"}>Problem/Diagnosis</Text>
          <Text variant={"body-emphasized"} className="col-span-2">
            Description
          </Text>
          <Text variant={"body-emphasized"}>Status</Text>
        </div>
        <ScrollArea className="h-[170px] mt-[10px]">
          <div className="flex flex-col">
            {data.diagnostic_list.map((diagnostic, i) => (
              <div key={i}>
                <div className="items-center px-[16px] h-[60px] grid grid-cols-4 gap-[16px]">
                  <Text variant={"body-regular"}>{diagnostic.name}</Text>
                  <Text variant={"body-regular"} className="col-span-2">
                    {diagnostic.description}
                  </Text>
                  <Text variant={"body-regular"}>{diagnostic.status}</Text>
                </div>
                {i < data.diagnostic_list.length - 1 && (
                  <Divider
                    type={"horizontal"}
                    variant={"lighter"}
                    className="w-full"
                  />
                )}
              </div>
            ))}
          </div>
          <ScrollBar orientation="vertical" />
        </ScrollArea>
      </div>
    </Card>
  );
};
