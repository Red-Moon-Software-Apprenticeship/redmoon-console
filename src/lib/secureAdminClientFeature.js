


export const secureSuperAdminClientFeature = (router, userSession) => {

    const {subRole, role} = userSession;
    if(role !== 'admin' || subRole !== 'super admin') router.push('/admin-panel')
}