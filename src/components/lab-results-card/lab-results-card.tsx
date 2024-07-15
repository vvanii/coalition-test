import { useFetchJessicaTaylor } from "@/hooks";
import { cn } from "@/lib";
import { Card, DownloadIcon, Text } from "@core/ui";

export const LabResultsCard: React.FC = () => {
  const { data } = useFetchJessicaTaylor();

  if (!data) return null;

  return (
    <Card className="w-[367px] h-[283px] p-[20px] overflow-y-auto">
      <Text variant={"card-title"}>Lab Results</Text>

      <div className="mt-[16px]">
        {data.lab_results.map((result, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-between px-[16px] py-[10px]",
              result === "CT Scans" && "bg-[#F6F7F8]",
            )}
          >
            <Text variant={"manrope-regular-13px"}>{result}</Text>
            <button>
              <DownloadIcon />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
};
