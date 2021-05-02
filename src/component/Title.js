import React from "react";

function Title({ name, title }) {
  return (
    <div className="row">
      <div className="col-10 mx-auto my-auto text-center text_title ">
        <h1>
          {name} {title}
        </h1>
      </div>
    </div>
  );
}

export default Title;
