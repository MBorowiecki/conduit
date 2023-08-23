export interface IProfile {
  bio: string;
  following: boolean;
  image: string;
  username: string;
}

export interface ILoggedProfile extends IProfile {
  email: string;
  token: string;
}

export interface IRequestProfile {
  email: string;
  password: string;
}
