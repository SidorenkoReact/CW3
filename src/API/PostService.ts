import axios from "axios";
import {IPost} from "../types/types";

export class PostService {
    public static async getAll(page?: number, limit?: number) {
        return await axios.get<IPost[]>('http://localhost:3001/posts', {
            params: {
                _page: page,
                _limit: limit,
            }
        })
    }

    public static async getById(id?: string) {
        return await axios.get('http://localhost:3001/posts/' + id)
    }

    public static async getPostCommentsById(id: string) {
        return await axios.get(` http://localhost:3001/posts/${id}/comments`)
    }

    public static async createPost(post: IPost) {
        return await axios.post('http://localhost:3001/posts/', post)
    }

    public static async deletePostById(id: number) {
        return await axios.delete('http://localhost:3001/posts/' + id)
    }
}
