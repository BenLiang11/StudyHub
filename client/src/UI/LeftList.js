import React, { useState } from "react";

function ListGroup() {
  let Department = ["CSE", "MATH", "HUM", "BENG", "COGS", "CSE", "MATH", "HUM", "BENG", "COGS", "CSE", "MATH", "HUM", "BENG", "COGS"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div style={{marginLeft : '1%'}}>
      <h1 className="text-center">Department</h1>
      {Department.length === 0 && <p>No departments found</p>}
      <ul className="list-group">
        {Department.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListGroup;
