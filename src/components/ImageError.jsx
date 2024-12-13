import React from "react";

const ImageWithFallback = ({ src, alt, placeholder }) => {
  const handleError = (event) => {
    event.target.src = placeholder;
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleError}
      style={{ width: "100%", height: "auto" }}
    />
  );
};

export default ImageWithFallback;

