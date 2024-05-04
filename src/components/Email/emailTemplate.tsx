import { TemplateParams } from '@/config/types';
import React from 'react';

const EmailTemplate = ({ newUser }: { newUser: TemplateParams }) => {
    return `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <h2 style="text-align: center; margin-bottom: 20px;">Welcome to Our Website, ${newUser.name.split(" ")[0]}!</h2>
      <p style="margin-bottom: 10px;">Thank you for registering with us. To complete your registration and verify your email address, please click on the button below.</p>
      <p style="margin-bottom: 10px;">Your account details:</p>
      <ul style="list-style: none; padding: 0; margin-bottom: 20px;">
        <li><strong>User ID:</strong> ${newUser.name}</li>
        <li><strong>Email:</strong> ${newUser.email}</li>
      </ul>
      <p style="margin-bottom: 20px;">Please use the following token to log in:</p>
      <div style="text-align: center;">
        <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Use Token: ${newUser.token}</a>
      </div>
      <p style="margin-top: 20px; font-size: 14px; color: #666;">If you did not register with us, please ignore this email.</p>
    </div>
  `;
};

export default EmailTemplate;
