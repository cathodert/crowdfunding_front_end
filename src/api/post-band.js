async function postBand(inputs) {
    const url = `${import.meta.env.VITE_API_URL}/bands/`;

    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: '',
          country: '',
          description: '',
          cover_image: '',
          website: ''
        }

        ),
      });
    
      if (!response.ok) {
        const fallbackError = `Error trying to create band`;
    
        const data = await response.json().catch(() => {
          throw new Error(fallbackError);
        });
    
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
      }
    
      return await response.json();
    }

    export default postBand