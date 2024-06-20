export interface MeResponce {
  data: {
    id: number;
    login: string;
    email: string;
  };
  messages: string[];
  resultCode: number;
  fieldsErrors: string[];
}
