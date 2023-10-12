export const makeHTMLBody = (name, verifToken, role ='apprentice') => (
`
<p>${name}</p>
<p>Thank you for applying to the Redmoon Apprenticeship${role === 'company' && ' as  partner'}.</p>
<p>Attached you will find the verification code for your account:</p>
<p>${verifToken}</p>
<p>Please head over to the link at <a href='localhost:3000/auth/verify'>Here<a></p>
<br/>
<br/>
<p>- Redmoon Apprenticeship Program</p>
`
)

export const makeSubjectAppr = (name) => (`${name}, Thank you for applying to the Redmoon Apprenticeship.`)
export const makeSubjectComp = (name) => (`${name}, Thank you for joining Redmoon as a Partner`)