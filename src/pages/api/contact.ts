// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { createTransport } from 'nodemailer';

type Data = {
  status:boolean
}

// GMAIL設定 https://qiita.com/akifumii/items/0ef31043723c14546aa5

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const transporter = createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });
  const data = JSON.parse(req.body);
  try{
    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_MAIL_USER,
      to: data.email,
      subject: '以下の内容でお問い合わせを受け付けました',
      text: `
      名前
      ${data.name}
      
      メールアドレス
      ${data.email}
      
      お問い合わせ内容
      ${data.msg}
      `,
    });
  
    res.status(200).json({
      status: true,
    });
  }catch(error){
    res.status(400).json({status: false})
  }
};
 
