import { useState, useEffect } from "react";

import getTour from "../api/get-tour";
import getBand from "../api/get-band";

export default function useTour(tourId) {
  const [tour, setTour] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // if (!tourId) return

    if (!tourId) {
      console.log("No tourId provided");
      setIsLoading(false);
      return
    }
    console.log(tour)  

    getTour(tourId)
      .then((tour) => {
        console.log(tour)
        setTour(tour);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

  }, [tourId]);

  return { tour, isLoading, error };
}