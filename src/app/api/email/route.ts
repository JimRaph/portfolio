import nodemailer from 'nodemailer';
import isRated from '@/app/utils/rate';


export const POST = async(req: Request) => {
    const {name, email, message} = await req.json();
    const ip = req.headers.get('x-forwarded-for') || 'unknow';
    
    console.log('MAIL: ', process.env.EMAIL_USER)
    if(isRated(ip)){
        return new Response(
            JSON.stringify({error:'Too many requests, try again later'}),{
                status: 429
            }
        )
    }
    const transporter = nodemailer.createTransport({
        // service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        auth:{
            user: process.env.EMAIL_USER ,
            pass: process.env.EMAIL_PASS 
        }
    });

    try {
        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER ,
            subject: 'New Message from Web-dev',
            text: `Message from: ${name} - ${message}`
        })

        return new Response(JSON.stringify({success:true}),{
            status: 200,
        })
    } catch (error) {
        console.error('Email failed: ', error)
        return new Response(JSON.stringify({success:false}),{
            status: 500
        })
    }
}
