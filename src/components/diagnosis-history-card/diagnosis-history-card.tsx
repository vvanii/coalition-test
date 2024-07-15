import { useFetchJessicaTaylor } from "@/hooks";
import { Card, Text } from "@core/ui";
import { VitalCard, VitalCardProps } from "./components";

export const DiagnosisHistoryCard: React.FC = () => {
  const { data } = useFetchJessicaTaylor();

  if (!data) return null;

  // Compute averages
  const averageValues = data.diagnosis_history.reduce(
    (acc, diagnosis) => {
      acc.respiratory_rate += diagnosis.respiratory_rate.value;
      acc.temperature += diagnosis.temperature.value;
      acc.heart_rate += diagnosis.heart_rate.value;
      acc.count += 1;
      return acc;
    },
    { respiratory_rate: 0, temperature: 0, heart_rate: 0, count: 0 },
  );

  const avgRespiratoryRate = (
    averageValues.respiratory_rate / averageValues.count
  ).toFixed(2);
  const avgTemperature = (
    averageValues.temperature / averageValues.count
  ).toFixed(2);
  const avgHeartRate = (averageValues.heart_rate / averageValues.count).toFixed(
    2,
  );

  const diagnosisHistory = data.diagnosis_history.map((diagnosis, i) => {
    const diagnosticHistoryData: VitalCardProps[] = [
      {
        background_color_hex: "#E0F3FA",
        icon: <img src="/respiratory-icon.svg" alt="respiratory icon" />,
        title: "Respiratory Rate",
        bpm: diagnosis.respiratory_rate.value,
        level: diagnosis.respiratory_rate.levels,
      },
      {
        background_color_hex: "#FFE6E9",
        icon: <img src="/temperature-icon.svg" alt="temperature icon" />,
        title: "Temperature",
        temperature: diagnosis.temperature.value,
        level: diagnosis.temperature.levels,
      },
      {
        background_color_hex: "#FFE6F1",
        icon: <img src="/heart-bpm-icon.svg" alt="heart beat icon" />,
        title: "Heart Rate",
        bpm: diagnosis.heart_rate.value,
        level: diagnosis.heart_rate.levels,
      },
    ];

    return (
      <div key={i} className="flex justify-between">
        {diagnosticHistoryData.map((vitalCardData, i) => (
          <VitalCard key={i} {...vitalCardData} />
        ))}
      </div>
    );
  });

  // Vital cards for average values
  const averageVitalCards: VitalCardProps[] = [
    {
      background_color_hex: "#E0F3FA",
      icon: <img src="/respiratory-icon.svg" alt="respiratory icon" />,
      title: "Average Respiratory Rate",
      bpm: avgRespiratoryRate,
    },
    {
      background_color_hex: "#FFE6E9",
      icon: <img src="/temperature-icon.svg" alt="temperature icon" />,
      title: "Average Temperature",
      temperature: avgTemperature,
      level: "",
    },
    {
      background_color_hex: "#FFE6F1",
      icon: <img src="/heart-bpm-icon.svg" alt="heart beat icon" />,
      title: "Average Heart Rate",
      bpm: avgHeartRate,
    },
  ];

  return (
    <Card className="p-[20px] w-[766px] h-[673px]">
      <Text variant={"card-title"}>Diagnosis History</Text>
      <div className="mt-[20px]">
        {diagnosisHistory}
        <div className="mt-[20px] flex justify-between">
          {averageVitalCards.map((vitalCardData, i) => (
            <VitalCard key={i} {...vitalCardData} />
          ))}
        </div>
      </div>
    </Card>
  );
};
