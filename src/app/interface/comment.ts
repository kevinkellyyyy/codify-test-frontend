import { User } from './user';

export interface Comment {
    id: string;
    message: string;
    owner: User;
    publishDate: string;
}