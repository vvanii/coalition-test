import {
  LabResultsCard,
  Navbar,
  PatientInfoCard,
  PatientsListCard,
  DiagnosticListCard,
} from "@/components";

const App: React.FC = () => {
  return (
    <div className="p-[18px] max-h-screen">
      <Navbar />
      <div className="flex space-x-[32px]">
        <PatientsListCard />
        <div className="space-y-[32px]">
          <DiagnosticListCard />
        </div>
        <div className="space-y-[32px]">
          <PatientInfoCard />
          <LabResultsCard />
        </div>
      </div>
    </div>
  );
};

export default App;
