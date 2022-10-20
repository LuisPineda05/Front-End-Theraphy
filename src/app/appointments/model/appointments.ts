export interface Appointments {
  id: number,
  patient_id: number,
  patient_name: string,
  patient_surname: string,
  physiotherapist_id: number,
  physiotherapist_name: string,
  date: string,
  hour: number,
  minute: number,
  ampm: string,
  topic: string,
  done: boolean,
  diagnosis: string
}
