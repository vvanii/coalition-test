import { CTPatientDataApi, type PatientMv } from "@/lib";
import { useEffect, useState } from "react";

export const useFetchPatients = () => {
  const [data, setData] = useState<PatientMv[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<unknown>();

  useEffect(() => {
    const fetchData = async () => {
      setIsError(null);
      setIsLoading(true);

      try {
        const data = await CTPatientDataApi.getPatientInfo();
        setData(data);
      } catch (error) {
        setIsError(error);
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  return { data, isLoading, isError };
};
