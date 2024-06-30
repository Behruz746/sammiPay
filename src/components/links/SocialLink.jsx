import React from "react";

function SocialLink({ link }) {
  return (
    <a href={link.link}>
      <img
        src={link.icon}
        alt={link.id}
        className="w-[21px] h-[21px] object-contain"
      />
    </a>
  );
}

export default SocialLink;
