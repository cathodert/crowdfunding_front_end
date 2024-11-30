
async function postSignup(inputs) {
    const url = `${import.meta.env.VITE_API_URL}/users/`;
    
    try{
        const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            username: inputs.username,
            password: inputs.password,
            email: inputs.email,
            user_type: inputs.user_type,
            "first name": inputs.first_name,
            "last name": inputs.last_name
        })
        });

    
        if (!response.ok) {
            // throw Error(`Error: ${response.statusText}`);
        }
    
        const result = await response.json();
        return result;
    }   catch (error) {
        console.error("Error:", error);
        throw error;
    }
}
  export default postSignup;