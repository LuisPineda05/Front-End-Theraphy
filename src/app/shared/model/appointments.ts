export interface Appointments {
  id: number,
  patient_id: number,
  patient_name: string,
  physiotherapist_id: number,
  physiotherapist: string,
  date: string,
  topic: string,
  done: boolean,
  diagnosis: string
}
