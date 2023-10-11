
const createGetReq = () => (
    {
        method: 'GET',
    }
)

export const createReq = (method = 'GET', body) => {
    if(method === 'GET') return createGetReq();

    return {
        method,
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
    }
}