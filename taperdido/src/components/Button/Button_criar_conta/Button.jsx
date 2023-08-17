import React from "react";

function Button({ onClick }) {
   return (
      <div className="estilo_botao">
         <button onClick={onClick}>
            <span>Crie sua conta</span>
         </button>
      </div>
   );
}

export default Button
