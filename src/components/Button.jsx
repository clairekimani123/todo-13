import React from "react";

const Button = ({greeting = "hello"}) => {
    return <button>{greeting}</button>
   

}

export default Button;