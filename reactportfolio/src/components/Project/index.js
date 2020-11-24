import React from "react";
import Password from "../../images/Password.png";

function Project() {
  return (
      <div>
        <figure className="col-md-4">
            <img src={Password} className="img-thumbnail" alt="password-generator"/>
            <a href="https://cristinaruiz21.github.io/Password-Generator/" className="link-text">Random Password Generator</a>
        </figure>
      </div>
  );
}

export default Project;