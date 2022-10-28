import React from "react";
import error from "./assets/error.png";
import { Link,} from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="error">
        <img src={error} alt="Error 404" />
      </div>
      <div className="error-text">
        <h1>PAGE NOT FOUND</h1>
        <p>Please remain calm and go back to the home page</p><br/><br/>
        <Link to="/">
          <a href="/">Back to home page</a>
        </Link>
      </div>
    </>
  );
}

export default ErrorPage;
