import { useState, useEffect } from "react";

import getTour from "../api/get-tour";

export default function useTour(tourId) {
  const [tour, setTour] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the projectId to the getProject function.
    getTour(tourId)
      .then((tour) => {
        setTour(tour);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // This time we pass the projectId to the dependency array so that the hook will re-run if the projectId changes.
  }, [tourId]);

  return { tour, isLoading, error };
}