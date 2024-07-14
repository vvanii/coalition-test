import * as Icon from "@core/ui/icons";
import { Divider, Text } from "@core";
import { cn } from "@/lib";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white h-[72px] rounded-[70px] flex items-center mb-[32px]">
      <div className="px-[32px] py-[12px]">
        <a href="/">
          <img src="/tech-care-logo.svg" alt="Tech Care Logo" />
        </a>
      </div>
      <div className="mx-auto">
        <ul className="flex justify-between items-center w-[662px]">
          {navOptions.map((option) => (
            <li key={option.label}>
              <a
                href=""
                className={cn(
                  "flex items-center justify-center",
                  option.isSelected &&
                    "bg-[#01F0D0] py-[11px] px-[16px] rounded-[41px]",
                )}
              >
                <div className="mr-[9px]">{option.icon}</div>
                <Text variant={"body-emphasized"}>{option.label}</Text>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-end items-center mr-[44px]">
        <img src="/doctor-pfp.png" alt="doctor Jose Simmons profile picture" />
        <div className="ml-[8px]">
          <Text variant={"body-emphasized"}>Dr.Jose Simmons</Text>
          <Text variant={"body-secondary-info"}>General Practitioner</Text>
        </div>
        <Divider
          type={"vertical"}
          variant={"darker"}
          className="h-[44px] mx-[12px]"
        />
        <div className="flex space-x-[12px]">
          <button>
            <Icon.GearCogIcon />
          </button>
          <button>
            <Icon.ThreeDotsVerticalIcon />
          </button>
        </div>
      </div>
    </nav>
  );
};

interface NavOption {
  label: string;
  icon: React.ReactNode;
  isSelected?: boolean;
}

const navOptions: NavOption[] = [
  { label: "Overview", icon: <Icon.HouseIcon /> },
  { label: "Patients", icon: <Icon.PeopleIcon />, isSelected: true },
  { label: "Schedule", icon: <Icon.CalendarIcon /> },
  { label: "Message", icon: <Icon.MessageIcon /> },
  { label: "Transactions", icon: <Icon.CreditCardIcon /> },
];
