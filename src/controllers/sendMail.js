const sendMail = async (req, res) => {
  const { name, email, phone, text } = req.body;

  const message = `Nome: ${name}
  E-mail: ${email}
  Telefone: ${phone}

  Mensagem: ${text}
  ` 

  try {
    transporter.sendMail({
        from: `Gabriel <${process.env.MAIL_USER}>`,
        to: process.env.MAIL_TO,
        subject: `Nova mensagem de ${name}`,
        text: message,
      });
      return res.json("Mensagem enviada com sucesso");

  } catch (error) {
    return res.status(400).json(error.message);
  }
};

module.exports ={ sendMail }