import React from "react";
import User from "./User";

const Users = (props) => {
  let pupils = props.students;
  return (
    <div>
      {pupils.map((item) => {
        return (
          <div>
            <User student={item} updateData={props.updateData} />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
