import {Physiotherapist} from "../../security/model/physiotherapist";

export interface Treatment {
  id:number,
  videoUrl: string,
  duration: string,
  title: string;
  description: string,
  day: string,
  viewed: boolean,
}
