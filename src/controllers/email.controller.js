import EmailService from "../services/email.service.js";

export const sendEmail = async (req, res) => {
  const { name, email, phone, subject, message } = req.body;
  try {
    const result = await EmailService.sendMail(
      "sergio3996@gmail.com",
      `${subject}`,
      `<p>Nombre: ${name}</p>
      <p>Telefono: ${phone}</p>
      <p>Email: ${email}</p>
      <p>Mensaje: ${message}</p>`
    );
    res.status(200).json({ message: "Correo enviado con exito" });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
