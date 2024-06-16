import React from "react";

interface PropsButton{
    type: "submit" | "reset" | "button";
    children: React.ReactNode;
}

export default function Button({type, children}: PropsButton){
    return(
        <button type={type}>{children}</button>
    )
}