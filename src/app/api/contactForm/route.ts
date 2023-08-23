import { NextRequest, NextResponse } from "next/server";
import { sendMail } from "./nodemailer";

export const POST = async (request: NextRequest, response: NextResponse) => {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, shoot, location, message } =
      body.body;

    if (
      firstName.length === 0 ||
      lastName.length === 0 ||
      email.length === 0 ||
      phone.length === 0 ||
      shoot.length === 0 ||
      location.length === 0 ||
      message.length === 0
    ) {
      return NextResponse.json({
        message: "Vul alle velden in aub.",
        success: false,
      });
    }
    console.log(
      "Body",
      firstName,
      lastName,
      email,
      phone,
      shoot,
      location,
      message
    );

    try {
      const response = await sendMail(
        firstName,
        lastName,
        email,
        phone,
        shoot,
        location,
        message
      );

      if (response === "success") {
        return NextResponse.json({
          message: "Mail is verzonden.",
          success: true,
        });
      } else {
        throw new Error("Error met mail versturen, probeer het nogmaals.");
      }
    } catch (error) {
      return NextResponse.json({
        message: "Er is iets fout gegaan probeer het nog eens.",
      });
    }
  } catch (error) {
    console.log("Error ", error);
    return NextResponse.json({
      message: "Er is iets fout gegaan probeer het nog eens.",
    });
  }
};
