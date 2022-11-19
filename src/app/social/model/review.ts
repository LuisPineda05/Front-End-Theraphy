export interface Review {
  id: number,
  patientId: number,
  physiotherapistId:number,
  physiotherapist: string,
  reviewer: string,
  stars: number,
  description: string,

}
