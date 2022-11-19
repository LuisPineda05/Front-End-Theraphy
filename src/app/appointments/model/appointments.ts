export interface Appointments {
  id: number,
  patientId: number,
  patientName: string,
  patientSurname: string,
  physiotherapistId: number,
  physiotherapistName: string,
  scheduledDate: string,
  hour: number,
  minute: number,
  ampm: string,
  topic: string,
  done: boolean,
  diagnosis: string,

}
