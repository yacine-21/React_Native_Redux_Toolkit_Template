export async function fetchMessage(){
    try {
        const response = ({message: "JE SUIS LE MESSAGE DE L'API"});
        return response
    } catch (error) {
        throw Error(error)
    }
}
