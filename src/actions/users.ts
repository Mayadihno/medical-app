"use server";
import { RegisterProp } from "@/config/types";
import { prismaClient } from "@/lib/db";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

// Create a nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: true,
  port: 465,
  auth: {
    user: "mayadihno@gmail.com",
    pass: "iiexolijglwkmwdq",
  },
});

export async function createUser(data: RegisterProp) {
  const { fullName, email, phone, password, role } = data;
  try {
    const existingUser = await prismaClient.user.findUnique({
      where: {
        email,
      },
    });
    if (existingUser) {
      return {
        data: null,
        error: `User with this email ( ${email})  already exists in the Database`,
        status: 409,
      };
    }
    // Encrypt the Password =>bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);
    //Generate Token
    const generateToken = () => {
      const min = 100000; // Minimum 6-figure number
      const max = 999999; // Maximum 6-figure number
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const userToken = generateToken();
    const newUser = await prismaClient.user.create({
      data: {
        name: fullName,
        email,
        phone,
        password: hashedPassword,
        role,
        token: userToken,
      },
    });

    // Render EmailTemplate to HTML string
    const htmlTemplate = `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <h2 style="text-align: center; margin-bottom: 20px;">Welcome to Our Website, ${
    newUser.name.split(" ")[0]
  }!</h2>
  <p style="margin-bottom: 10px;">Thank you for registering with us. To complete your registration and verify your email address, please click on the button below.</p>
  <p style="margin-bottom: 10px;">Your account details:</p>
  <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
    <li><strong>User ID:</strong> ${newUser.name}</li>
    <li><strong>Email:</strong> ${newUser.email}</li>
  </ul>
  <p style="margin-bottom: 20px;">Please use the following token to log in:</p>
  <div style="text-align: center;">
    <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Use Token: ${
      newUser.token
    }</a>
  </div>
  <p style="margin-top: 20px; font-size: 14px; color: #666;">If you did not register with us, please ignore this email.</p>
</div>
    `;

    // Send email using nodemailer
    await transporter.sendMail({
      from: "mayadihno@gmail.com",
      to: newUser.email,
      subject: "Verify your Account",
      html: htmlTemplate,
    });

    return {
      data: newUser,
      error: null,
      status: 201,
    };
  } catch (error) {
    console.log(error);
  }
}
