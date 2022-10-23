import React from "react";

function MembersList({ member }) {
  const { picture, name, location } = member;
  return (
    <div className="card">
      <img className="card-image" src={picture.large} alt={name.first} />
      <div className="card-text">
        <span className="card-name">
          {name.title} {name.first} {name.last}{" "}
        </span>
        <br />
        <span className="card-location">{location.country}</span>
      </div>
    </div>
  );
}

export default MembersList;
