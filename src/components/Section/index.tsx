'use client'
import React from "react";
import styled from "styled-components";

interface PropsForm {
    title: string;
    children: React.ReactNode;
}

const SectionWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    position: relative;

    div{
        width: 60%;
        height: 100%;
        max-height: 300px;
        background-color: #cce3de;
        padding: 15px;
        box-shadow: 10px 10px 20px #949494;

        h1{
            text-align: center;
            padding: 5px;
        }

        form{
            display: flex;
            flex-direction: column;
            height: 100%;
            margin-top: 20px;

            label{
                font-size: 14px;
                text-transform: capitalize;
                margin-bottom: 3px;
            }

            input{
                margin-bottom: 10px;
                padding: 5px 10px;
                border-radius: 5px;
                border: none;
                font-size: 14px;
                outline: none;
            }

            button{
                margin: 40px auto;
                height: 40px;
                border: none;
                outline: none;
                font-size: 16px;
                letter-spacing: 2px;
                border-radius: 50px;
                max-width: 200px;
                cursor: pointer;
                width: 100%;
            }
        }
        p{
            position: absolute;
            bottom: 19vh;
            font-size: 11px;
            color: #ff0000;
        }
    }
`;

export default function Section({title, children}: PropsForm){
    return(
        <SectionWrapper>
            <div>
                <h1>{title}</h1>
                {children}   
            </div>
        </SectionWrapper>
    )
}