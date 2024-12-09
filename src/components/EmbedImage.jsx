import React from "react";

const embedImage= ({src, width, height}) => {
    return (
        <iframe
        src={src}
        width={width}
        height={height}
        allow="autoplay"
        className="iframe-border"
        allowFullScreen
        ></iframe>
    );
}

export default embedImage