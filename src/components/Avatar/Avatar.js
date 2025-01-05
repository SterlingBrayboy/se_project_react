import React, { useState } from "react";
import "./Avatar.css";

const Avatar = ({ name = "User", imageUrl }) => {
  const [isImageError, setIsImageError] = useState(false);

  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "");
  const initial = getInitial(name);

  return !isImageError && imageUrl ? (
    <img
      src={imageUrl}
      alt={name || "User"}
      className="avatar"
      onError={() => setIsImageError(true)} // Handle broken image fallback
    />
  ) : (
    <div className="avatar__placeholder">{initial}</div>
  );
};

export default Avatar;
