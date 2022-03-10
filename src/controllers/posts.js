const { knex } = require("../db_connection");



const getPosts = async (req, res) => {
try {
    const posts = await knex("posts")
    res.json(posts);
} catch (error) {
    return res.status(400).json({ mensagem: error.message });
}

   
};


const sendPost = async (req, res) => {
    const {author, post_text, title, subtitle, highlight, image, category} = req.body;
    const post_date = new Date()

    try {
     const newPost = await knex("posts").insert({
        author, post_text, title, subtitle, highlight, image, post_date, category
    });

    if (!newPost) {
        return res
          .status(400)
          .json({ mensagem: "Não foi possível criar o post" });
      }
  
      return res.status(200).json({ mensagem: "Post criado com sucesso!" });
  
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
    
};

const deletePost = async (req, res) => {
    const { id } = req.params;

    try {
     const deletedPost = await knex("posts").where({id}).del();

    if (!deletedPost) {
        return res
          .status(400)
          .json({ mensagem: "Não foi possível deletar o post" });
      }
  
      return res.status(200).json({ mensagem: "Post deletado com sucesso!" });
  
    } catch (error) {
        return res.status(400).json({ mensagem: error.message });
    }
    
};

module.exports = {
  getPosts,
  sendPost,
  deletePost
};
