import React from "react";

function Button({ onClick }) {
   return (
      <button onClick={onClick}>
         <span>Crie sua conta</span>
      </button>
   );
}

export default Button
