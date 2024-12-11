async function postTour(inputs, token) {
    const url = `${import.meta.env.VITE_API_URL}/tours/`;

    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
          genre: [1],
          title: inputs.title,
          description: inputs.description,
          goal: inputs.goal,
          image: inputs.image,
          is_open: true,
          band: inputs.band
        }

        ),
      });
    
      if (!response.ok) {
        const fallbackError = `Error trying to create tour`;
    
        const data = await response.json().catch(() => {
          throw new Error(fallbackError);
        });
    
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
      }
    
      return await response.json();
    }

    export default postTour