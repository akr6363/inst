export interface ProfileResponse {
  aboutMe?: string;
  contacts: Contacts;
  lookingForAJob: boolean;
  lookingForAJobDescription?: string;
  fullName: string;
  userId: number;
  photos: {
    small: string;
    large: string;
  };
}

export interface Contacts {
  facebook: string;
  website?: string;
  vk?: string;
  twitter?: string;
  instagram?: string;
  youtube?: string;
  github?: string;
  mainLink?: string;
}
