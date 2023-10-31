import { updateUserRole } from '@/database/users/updateAppr';
import { secureAdminApiRoute } from '@/lib/secureAdminRoute';
import { NextResponse } from 'next/server';

const PATCH = async (req) => {
    const validSessionObj = await secureAdminApiRoute()

    if (!Object.values(validSessionObj)) {
        return NextResponse.json(validSessionObj)
    }

    try {
        const { id, role, subRole} = await req.json()
        const updatedUser = await updateUserRole(id, role, subRole)

        return NextResponse.json({ updatedUser }, { status: 200 })
    } catch (error) {

        let err, status = 500
        return NextResponse.json({ err }, { status })

    }

}

export default PATCH;
