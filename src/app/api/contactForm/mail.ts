import nodemailer from "nodemailer";

export const sendMail = async (
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  shoot: string,
  location: string,
  message: string
) => {
  let transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
      user: `${process.env.NEXT_PUBLIC_NODEMAILER_EMAIL}`,
      pass: `${process.env.NEXT_PUBLIC_NODEMAILER_APP_PWD}`, // link: https://support.google.com/accounts/answer/185833?hl=en
    },
  });

  const mail = {
    from: "noreply@DBphotography.nl",
    to: "ddstavenuiter@gmail.com",
    //   "ddstavenuiter@gmail.com",
    subject: `${firstName} ${lastName} heeft je gecontact voor een shoot`,
    html: `
            <h1>Hi Denise Biegelaar,</h1> 
            <p>${firstName} ${lastName}  wilt graag contact met je opnemen voor een shoot!<p>

            <p>
            Voornaam: ${firstName} <br>
            Achternaam: ${lastName} <br>
            Telefoon: ${phone} <br>
            Email: ${email} <br>
            Bericht: ${message} <br>
            Shoot: ${shoot} <br>
            Locatie voorkeur: ${location}
            </p>
              `,
  };

  try {
    await transporter.sendMail(mail);
    console.log('mail verzonden')
    return "success"
  } catch (error) {
    console.log("Error met mail sturen: ", error);
    throw new Error("Error sending email");
  }
};

export default nodemailer;
