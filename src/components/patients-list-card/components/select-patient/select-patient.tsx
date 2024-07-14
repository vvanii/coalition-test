import { Text, ThreeDotsHorizontalIcon } from "@core/ui";

interface SelectPatientProps {
  profile_picture: string;
  name: string;
  gender: string;
  age: number;
}

export const SelectPatient: React.FC<SelectPatientProps> = ({
  profile_picture,
  name,
  gender,
  age,
}) => {
  return (
    <div>
      {name === "Jessica Taylor" && (
        <div className="relative w-full">
          <span className="absolute w-full h-[80px] -top-4 bg-[#D8FCF7]" />
        </div>
      )}
      <div>
        <div className="flex items-center justify-between px-[20px]">
          <div className="flex items-center z-20">
            <img
              src={profile_picture}
              alt={`${name} profile picture`}
              height={48}
              width={48}
              className="mr-[12px]"
            />
            <div>
              <Text variant={"body-emphasized"}>{name}</Text>
              <Text variant={"body-secondary-info"}>
                {gender}, {age}
              </Text>
            </div>
          </div>
          <button className="z-10 p-2">
            <ThreeDotsHorizontalIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
