import { useFetchJessicaTaylor } from "@/hooks";
import { Card, Text, Skeleton } from "@core/ui";
import * as Icon from "@core/ui/icons";
import { PatientInfoBubble, PatientInfoBubbleProps } from "./components";

export const PatientInfoCard: React.FC = () => {
  const { data: patient } = useFetchJessicaTaylor();

  if (!patient) {
    return <Skeleton className="h-[740px] w-[367px]" />;
  }

  const patientInfo: PatientInfoBubbleProps[] = [
    {
      icon: <Icon.CalendarIcon className="h-[20px] w-[20px]" />,
      title: "Date of Birth",
      value: patient.date_of_birth,
    },
    {
      icon: <Icon.FemaleSymbolIcon />,
      title: "Gender",
      value: patient.gender,
    },
    {
      icon: <Icon.PhoneIcon />,
      title: "Phone Number",
      value: patient.phone_number,
    },
    {
      icon: <Icon.PhoneIcon />,
      title: "Emergency Contacts",
      value: patient.emergency_contact,
    },
    {
      icon: <Icon.InsuranceShieldIcon />,
      title: "Insurance",
      value: patient.insurance_type,
    },
  ];

  return (
    <Card className="px-[20px] py-[32px] w-[367px] h-[740px]">
      <div className="flex flex-col justify-center items-center">
        <img
          src="/jessica-taylor-pfp-large.png"
          alt={`${patient.name} profile picture`}
          width={200}
          height={200}
          className="mb-[24px]"
        />
        <Text variant={"manrope-extrabold-30px"}>{patient.name}</Text>
      </div>

      <div className="mt-[32px]">
        {patientInfo.map((info, index) => (
          <PatientInfoBubble key={index} {...info} />
        ))}
      </div>

      <div className="flex justify-center">
        <button className="bg-[#01f0d0] py-[11px] px-[40px] rounded-[41px]">
          <Text variant={"body-emphasized"}>Show All Information</Text>
        </button>
      </div>
    </Card>
  );
};
