import React, { useEffect, useState } from "react";
import MembersList from "./MembersList";

function Users() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getMembers = () => {
    fetch(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMembers(data.results);
        setLoading(false);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    setLoading(true);
    getMembers();
  }, [page]);

  if (loading) {
    return <div>Loading......</div>;
  }

  return (
    <>
      <h1 className="headers">Meet Our Members</h1>
      <div className = "container">
        {members.length > 1 &&
          members.map((member) => (
            <MembersList member={member} key={member.login.uuid} />
          ))}
      </div>

      <div className="btn-div">
        <button className="btn"
          onClick={() => {
            if (page > 1) {
              setPage((prev) => prev - 1);
            } else {
              alert("You're already on page 1!!!");
            }
          }}
        >
          Prev
        </button>
        <button className="btn"
          onClick={() => {
            setPage((prev) => prev + 1);
          }}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Users;
