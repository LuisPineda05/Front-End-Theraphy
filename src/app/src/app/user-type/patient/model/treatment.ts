export interface Treatment {
  id:number;
  title: string;
  description: string;
  sessionsQuantity: number;
  physiotherapistId: number;
  photo: string;
  videoSessions: string[]
}
