import React, { useEffect, useState } from "react";
import MembersList from "./MembersList";

function Users() {
  const [members, setMembers] = useState([]);
  const [disable, setDisable] = useState(false)
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

  function handlePrevious() {
    if (page >= 2) {
      setPage((prev) => prev - 1);
      setDisable(false)
    } else {
      setDisable(true)
    }
  }
  function handleNext() {
    setPage((prev) => prev + 1);
  }
  console.log(page)
  return (
    <>
      <h1 className="headers">Meet Our Members</h1>
      <div className="container">
        {members.length > 1 &&
          members.map((member) => (
            <MembersList member={member} key={member.login.uuid} />
          ))}
      </div>

      <div className="btn-div">
        <div>
        <button disabled={disable} className="btn-one bton" onClick={handlePrevious}>
            Prev
          </button>
        </div>
        <div>
          <button className="btn-one" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
  </>
  );
}

export default Users;
