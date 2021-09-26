export async function fetchUsers(){
    try {
        const response = await fetch("https://reqres.in/api/users?delay=1");
        return response;
    } catch (error) {
        throw Error(error)
    }
}
