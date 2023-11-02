import axios from "axios";
import {IPost} from "../types/types";

export class PostService {
    public static async getAll() {
        return await axios.get<IPost[]>('http://localhost:3001/posts')
    }
}