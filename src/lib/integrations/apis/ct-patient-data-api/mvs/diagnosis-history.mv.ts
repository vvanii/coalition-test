import type {
  BloodPressureMv,
  HeartRateMv,
  RespiratoryRateMv,
  TemperatureMv,
} from ".";

export type DiagnosisHistoryMv = {
  month: string;
  year: number;
  blood_pressure: BloodPressureMv;
  heart_rate: HeartRateMv;
  respiratory_rate: RespiratoryRateMv;
  temperature: TemperatureMv;
};
