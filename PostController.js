import Post from "./Post.js"
import axios from 'axios'
import PostService from "./PostService.js"

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body)
            res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

    async getAll(req, res) {
        try {
            // const posts = await PostService.getAll()
            const responce = await axios.get('https://newsapi.org/v2/top-headlines?country=ru&category=technology&apiKey=411ee355cec04bbe89d06efb9cc4cdc4');
            let dataPost = [];
            responce.data.articles.forEach(el => {
                const postId = String(Date.now());
                dataPost.push({ id: postId, title: el.title, description: el.description, url: el.url, urlToImage: el.urlToImage });
            });
            return res.json(dataPost);
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id)
            return res.json(post)
        } catch (e) {
            res.status(500).json(e)
        }
    }

}

export default new PostController();