import React from "react";
import PropTypes from "prop-types";

const colors = [
  `linear-gradient(to right, #FF9800, #ef8739)`,
  `linear-gradient(to right, #2196F3, #03A9F4)`,
  `linear-gradient(to right, #E91E63, #9C27B0)`,
  `linear-gradient(to right, #4CAF50, #8BC34A)`
];

function Tags({ data: tags }) {
  return (
    <ul style={{ display: "flex ", listStyleType: "none" }}>
      {tags.map(tag => (
        <li
          key={tag}
          style={{
            padding: "5px 12px",
            margin: "0 10px 0 0",
            borderRadius: "7px",
            fontSize: "12px",
            background: colors[parseInt(Math.random() * (3 - 0) + 0, 10)],
            color: "white",
            cursor: "pointer",
            boxShadow: `1px 2px 7px #d8d8d8`
          }}
        >
          {`#${tag}`}
        </li>
      ))}
    </ul>
  );
}

Tags.propTypes = {
  data: PropTypes.array.isRequired
};

export default Tags;
