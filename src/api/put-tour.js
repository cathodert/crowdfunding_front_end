async function putTour(token, tourId, tourData) {
    // const url = `${import.meta.env.VITE_API_URL}/tours/${tourId}/`;
    const url = `https://bandtogethr-e2b0af362861.herokuapp.com/tours/166`
    console.log("PUT URL:", url);
    console.log("Tour Data:", tourData);
    console.log("Tour id:", tourData.id);
    console.log("Owner:", tourData.owner);


    const response = await fetch(url, {
        method: "PUT", // We need to tell the server that we are sending JSON data so we set the Content-Type header to application/json
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Token ${token}`
        },
        body: JSON.stringify(tourData)
    });
  
    if (!response.ok) {
      const fallbackError = `Error fetching tour with id ${tourId}`;
  
      const data = await response.json().catch(() => {
        throw new Error(fallbackError);
      });
  
      const errorMessage = data?.detail ?? fallbackError;
      throw new Error(errorMessage);
    }
  
    return await response.json();
  }
  
  export default putTour;