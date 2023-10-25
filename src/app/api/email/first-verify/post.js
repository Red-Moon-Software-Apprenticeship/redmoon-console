import { NextResponse } from 'next/server';
import { buildEmailContents, createFallback, sendEmail} from '@/lib/emails';
import { makeHTMLBody, makeSubjectAppr, makeSubjectComp } from '@/lib/emails/thankYouVerifyEmail'


// export const runtime ='edge' //uncomment once we have edge going

const POST = async(req) => {

    const {email, name,token, role} = await req.json();
    const htmlContents = makeHTMLBody(name, token, role);
    const plainTextFallback = createFallback(htmlContents);
    const subject = role === 'company' ? makeSubjectComp(name) : makeSubjectAppr(name); 
    const emailOptions = buildEmailContents(email, subject, plainTextFallback, htmlContents  )

    try{
        await sendEmail(emailOptions)

        return NextResponse.json({msg: `successfully sent email to ${email}` }, {status: 200})

    }catch(error){
        let err, status = 500


        return NextResponse.json({err}, {status})

    }

}

export default POST;
  