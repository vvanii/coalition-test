import type { PatientMv } from "./mvs";

export class CTPatientDataApi {
  static readonly url = import.meta.env.VITE_API_URL;
  static readonly username = import.meta.env.VITE_API_USERNAME;
  static readonly password = import.meta.env.VITE_API_PASSWORD;
  static headers = new Headers();

  static async getPatientInfo(): Promise<PatientMv[]> {
    this.headers.set(
      "Authorization",
      `Basic ${btoa(`${this.username}:${this.password}`)}`,
    );
    return await fetch(this.url, { headers: this.headers }).then((res) =>
      res.json(),
    );
  }
}
