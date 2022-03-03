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
    const {author, post_text, title, subtitle, highlight, image} = req.body;
    const post_date = new Date()

    try {
     const newPost = await knex("posts").insert({
        author, post_text, title, subtitle, highlight, image, post_date
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

module.exports = {
  getPosts,
  sendPost,
};
