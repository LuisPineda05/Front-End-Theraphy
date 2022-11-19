import {Treatment} from "./treatment";
import {Patient} from "../../security/model/patient";

export interface TreatmentsByPatient {
  id:number,
  treatment: Treatment,
  patient: Patient,
  registrationDate:string,
  progress:number
}
