import { NextResponse } from 'next/server';

const POST = (req) => {
    const { }= req.json()

    try{

        return NextResponse.json({ }, {status: 200})
    }catch(error){
        let err, status = 500


        return NextResponse.json({err}, {status})

    }

}

export default POST;