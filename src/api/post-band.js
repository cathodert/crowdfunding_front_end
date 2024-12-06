async function postBand(inputs, token) {
    const url = `${import.meta.env.VITE_API_URL}/bands/`;

    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
          name: inputs.name,
          country: inputs.country,
          description: inputs.description,
          cover_image: inputs.cover_image,
          website: inputs.website,
          genre: [1]
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