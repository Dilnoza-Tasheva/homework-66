export interface IMealForm {
  time: string;
  description: string;
  calories: number;
}

export interface IMeal {
  id: string;
  time: string;
  description: string;
  calories: number;
}

export interface IMealApi {
  [id: string]: IMeal;
}