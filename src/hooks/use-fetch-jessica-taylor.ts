import { useState, useEffect } from "react";
import { PatientMv } from "@/lib";
import { useFetchPatients } from "./use-fetch-patients";

export const useFetchJessicaTaylor = () => {
  const [data, setData] = useState<PatientMv>();
  const [error, setError] = useState<string | null>(null);
  const { data: patients } = useFetchPatients();

  useEffect(() => {
    if (patients && patients.length > 0) {
      const jessicaTaylor = patients.find(
        (patient) => patient.name === "Jessica Taylor",
      );

      if (jessicaTaylor) {
        setData(jessicaTaylor);
      } else {
        setError("Jessica Taylor not found");
      }
    }
  }, [patients]);

  return { data, error };
};
