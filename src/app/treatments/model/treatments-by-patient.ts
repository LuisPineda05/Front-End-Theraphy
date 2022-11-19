export interface TreatmentsByPatient {
  id:number,
  treatmentId: number,
  patientId: number,
  title: string,
  description: string,
  sessionsQuantity: number,
  physiotherapistId: number,
  photoUrl: string,
  videosSessions: string[],
  registrationDate:string,
  progress:number
}
