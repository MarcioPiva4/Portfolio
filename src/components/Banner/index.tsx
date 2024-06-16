'use client'
import Image from "next/image";
import banner from '@/../public/vackground-com-agUC-v_D1iI-unsplash.jpg';
import styled from "styled-components";

const Figure = styled.figure`
    width: 100vw;
    height: 100vh;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`;

export default function Banner(){
    return(
        <Figure>
            <Image src={banner} alt="banner"></Image>
        </Figure>
    )
}