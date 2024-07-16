import type { PatientMv } from "./mvs";

export class CTPatientDataApi {
  static readonly url = import.meta.env.VITE_API_URL;
  // I'm using env variables to store the username and password because in order to encrypt them, I would need to configure a backend server using something like express to convert the values to a JWT and the decrypt them on the client side. This would be a lot of work for a simple project like this.
  static readonly username = import.meta.env.VITE_API_USERNAME;
  static readonly password = import.meta.env.VITE_API_PASSWORD;
  static headers = new Headers();

  static async getPatientInfo(): Promise<PatientMv[]> {
    this.headers.set(
      "Authorization",
      `Basic ${btoa(`${this.username}:${this.password}`)}`
    );
    return await fetch(this.url, { headers: this.headers }).then((res) =>
      res.json()
    );
  }
}
