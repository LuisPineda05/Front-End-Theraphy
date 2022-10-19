export interface Review {
  id:number;
  patient_id:number;
  physiotherapist_id:number;
  physiotherapist: string;
  reviewer: string;
  stars: number;
  description: string;

}
