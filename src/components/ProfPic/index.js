import React from "react";
import Picture from "../../images/ProfilePic.jpg";

function ProfPic() {
  return(
      <div className="profpic">
        <img src={Picture} className="img-thumbnail" alt="profile-picture"/>
      </div>
  )
}

export default ProfPic;
