import { User } from './user';

export interface Post {
    text: string;
    image: string;
    likes: number;
    tags: string[];
    publishDate: string;
    owner: User;
}