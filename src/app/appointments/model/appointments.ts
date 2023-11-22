import {Physiotherapist} from "../../security/model/physiotherapist";
import {Patient} from "../../security/model/patient";

export interface Appointments {
  id: number,
  done: boolean,
  topic: string,
  diagnosis: string,
  date: string,
  hour: string,
  place: string,
  patientId: number,
  physiotherapistId: number
}
