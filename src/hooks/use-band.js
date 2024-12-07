import { useState, useEffect } from "react";

import getBand from "../api/get-band";

export default function useBand(bandId) {
  const [band, setBand] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    // Here we pass the projectId to the getProject function.
    if (!bandId) {
      // console.log("No bandID provided");
      setIsLoading(false);
      return
    }
    console.log(band)
    
    getBand(bandId)
      .then((band) => {
        setBand(band);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });

    // This time we pass the projectId to the dependency array so that the hook will re-run if the projectId changes.
  }, [bandId]);

  return { band, isLoading, error };
}