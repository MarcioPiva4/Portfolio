"use client"
import { createGlobalStyle } from "styled-components"


export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
  }
  body{
    background-color: #f6fff8;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
    font-family: "Inter", sans-serif;
  }
  main{
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`