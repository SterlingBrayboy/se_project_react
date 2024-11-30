import React from "react";
import "./Avatar.css";

const Avatar = ({ name, imageUrl }) => {
  const getInitial = (name) => (name ? name.charAt(0).toUpperCase() : "");
  const initial = getInitial(name);

  return (
    <>
      {imageUrl ? (
        <img src={imageUrl} alt={name} className="avatar" />
      ) : (
        <div className="avatar__placeholder">{initial}</div>
      )}
    </>
  );
};

export default Avatar;
