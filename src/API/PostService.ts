import axios from "axios";
import {IPost} from "../types/types";

export class PostService {
    public static async getAll() {
        return await axios.get<IPost[]>('https://jsonplaceholder.typicode.com/posts')
    }
}