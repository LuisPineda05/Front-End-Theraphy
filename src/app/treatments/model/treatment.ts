export interface Treatment {
  id:number;
  title: string;
  description: string;
  sessions_quantity: number;
  physiotherapist_id: number;
  photo: string;
  video_sessions: string[]
}
