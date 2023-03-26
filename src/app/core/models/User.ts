import { IUser } from '../interfaces/IUser';

export class User implements IUser {
  username!: String;
  email?: String;
  password?: String;
  stayLoggedIn?: Boolean;
}