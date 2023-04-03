import Styled from "styled-components";

export const BigTitle = Styled.h2`
font-style:normal;
font-weight:800;
font-size:190px;
line-height:120px;
letter-spacing:0.01em;
color:#363637;
padding:50px;
margin-top:100px;
z-index:-1;
 @media screen and (max-width: 500px) {
    font-size: 140px;
    line-height: 100px;
    font-weight: 600;
  }
`;
export const BigTitleActivity = Styled.h2`
font-style:normal;
font-weight:800;
font-size:190px;
line-height:150px;
letter-spacing:0.01em;
color:#363637;
padding:50px;
margin-top:100px;
z-index:-1;
 @media screen and (max-width: 750px) {
    font-size: 140px;
    line-height: 100px;
    font-weight: 600;
    padding:40px;
  }
  @media screen and (max-width: 560px) {
    font-size: 120px;
    line-height: 95px;
    font-weight: 550;
    padding:35px;
  }
  @media screen and (max-width: 500px) {
    font-size: 100px;
    line-height: 50px;
    font-weight: 550;
    padding:30px;
  }
  @media screen and (max-width: 430px) {
    font-size: 80px;
    line-height: 40px;
    font-weight: 550;
  }
`;

export const BlogContainer = Styled.div`
width:310px;
height:350px;
background-color:#F5F5F5;
border-radius: 5% 5% 5% 5%;

`;

export const BigName = Styled.h2`
font-style:normal;
font-weight:800;
font-size:100px;
line-height:120px;
letter-spacing:0.01em;
color:white;
 @media screen and (max-width: 700px) {
    font-size: 80px;
    line-height: 100px;
    font-weight: 600;
  }
  @media screen and (max-width: 500px) {
    font-size: 60px;
    line-height: 80px;
    font-weight: 600;
  }
  @media screen and (max-width: 410px) {
    font-size: 50px;
    line-height: 60px;
    font-weight: 600;
    padding-top:20px;
  }
`;