export interface TreatmentsByPatient {
  id:number;
  treatment_id: number;
  patient_id: number;
  title: string;
  description: string;
  sessions_quantity: number;
  physiotherapist_id: number;
  photo: string;
  videos_sessions: string[];
  registration_date:string;
  progress:number;
}
