import React from "react";

function MembersList({ member }) {
  const { picture, name, location } = member;
  return (
    <div className="column-section">
      <article className="card1">
          <div className="div">
            <img src={picture.large} alt={name.first}/>
          </div>
          <p>{name.title} {name.first} {name.last}</p>
          <p>Location: {location.country}g</p>
        </article>
    </div>
  );
}

export default MembersList;
