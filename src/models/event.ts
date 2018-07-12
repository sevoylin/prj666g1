import { User } from "./user"
export interface Event{
    admin: Array<User>;
    eventName: string;
    isPrivate: boolean;
    setPassword: boolean;
    password: string;
}