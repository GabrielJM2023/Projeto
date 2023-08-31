import React from "react";

function Button({ label, className }) {
   return (
      <button className={className}>
         <span>{label}</span>
      </button>
   )
}

export default Button
