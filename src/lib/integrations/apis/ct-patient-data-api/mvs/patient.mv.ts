import type { DiagnosisHistoryMv, DiagnosticListMv } from ".";

export type PatientMv = {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryMv[];
  diagnostic_list: DiagnosticListMv[];
  lab_results: string[];
};
