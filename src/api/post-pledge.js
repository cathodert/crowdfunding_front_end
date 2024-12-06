async function postPledge(inputs, token) {
    const url = `${import.meta.env.VITE_API_URL}/pledges/`;

    const response = await fetch(url, {
        method: "POST", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        body: JSON.stringify({
          amount: inputs.amount,
          comment: inputs.comment,
          tour: `${tour.id}`,
          band: `${band.id}`,            
        }

        ),
      });
    
      if (!response.ok) {
        const fallbackError = `Error trying to create pledge`;
    
        const data = await response.json().catch(() => {
          throw new Error(fallbackError);
        });
    
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
      }
    
      return await response.json();
    }

    export default postPledge