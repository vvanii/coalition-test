import { useFetchJessicaTaylor } from "@/hooks";
import { Card, Text } from "@core/ui";
import { VitalCard, VitalCardProps, BloodPressureCard } from "./components";

export const DiagnosisHistoryCard: React.FC = () => {
  const { data } = useFetchJessicaTaylor();

  if (!data) return null;

  const diagnosisHistory = data.diagnosis_history[0];

  const latestVitalData: VitalCardProps[] = [
    {
      background_color_hex: "#E0F3FA",
      icon: <img src="/respiratory-icon.svg" alt="respiratory icon" />,
      title: "Respiratory Rate",
      bpm: diagnosisHistory.respiratory_rate.value,
      level: diagnosisHistory.respiratory_rate.levels,
    },
    {
      background_color_hex: "#FFE6E9",
      icon: <img src="/temperature-icon.svg" alt="temperature icon" />,
      title: "Temperature",
      temperature: diagnosisHistory.temperature.value,
      level: diagnosisHistory.temperature.levels,
    },
    {
      background_color_hex: "#FFE6F1",
      icon: <img src="/heart-bpm-icon.svg" alt="heart beat icon" />,
      title: "Heart Rate",
      bpm: diagnosisHistory.heart_rate.value,
      level: diagnosisHistory.heart_rate.levels,
    },
  ];

  return (
    <Card className="p-[20px] w-[766px] h-[673px]">
      <Text variant={"card-title"}>Diagnosis History</Text>
      <div className="mt-[40px]">
        <BloodPressureCard />
      </div>
      <div className="mt-[20px]">
        <div className="mt-[20px] flex justify-between">
          {latestVitalData.map((vitalCardData, i) => (
            <VitalCard key={i} {...vitalCardData} />
          ))}
        </div>
      </div>
    </Card>
  );
};
