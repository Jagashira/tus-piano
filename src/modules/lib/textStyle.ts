import Styled from "styled-components";
import { motion } from "framer-motion";
import { useWindowSize } from "./useWindowSize";

export const BigTitle = Styled.h2`
font-style:normal;
font-weight:400;
font-size:100px;
line-height:80px;
letter-spacing:0.01em;
color:#363637;
opacity:0.4;
padding:50px;
margin-top:50px;
z-index:-1;
@media screen and (max-width: 500px) {
  font-size: 70px;
 
`;
export const BigTitleContact = Styled.h2`
font-style:normal;
font-weight:400;
font-size:100px;
line-height:80px;
letter-spacing:0.01em;
color:#363637;
opacity:0.4;
padding:50px;
margin-top:50px;
z-index:-1;
@media screen and (max-width: 700px) {
  font-size: 90px;
}
@media screen and (max-width: 600px) {
  font-size: 70px;
}
@media screen and (max-width: 500px) {
  font-size: 60px;
}
@media screen and (max-width: 450px) {
  font-size: 50px;
}
@media screen and (max-width: 400px) {
  font-size: 40px;
}
`;
export const BigTitleActivity = Styled.h2`
font-style:normal;
font-weight:400;
font-size:100px;
line-height:80px;
letter-spacing:0.01em;
color:#363637;
opacity:0.4;
padding:50px;
margin-top:50px;
z-index:-1;


@media screen and (max-width: 500px) {
  font-size: 90px;
}
@media screen and (max-width: 450px) {
  font-size: 70px;
}
@media screen and (max-width: 350px) {
  font-size: 60px;
}

`;

export const BlogContainer = Styled.div`
width:310px;
height:350px;
background-color:#F5F5F5;
border-radius: 5% 5% 5% 5%;
padding-bottom:0px;
margin-bottom:0px;
overflow:hidden;
`;
export const NewsContainer = Styled.div`
display:flex;
flex-direction:row;
width:100%;
padding:10px 0px;
font-size:20px;
border-bottom:1px solid #E5E5E5;
border-top:1px solid #E5E5E5;

`;
export const MoreArrowNews = Styled.div`
display:flex;
flex-direction:row;
align-items:center;

`;
export const MoreArrowBlog = Styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:right;
`;

export const CircleName = Styled.p`
/* max-width: 200px; */
text-align: center;
font-style:normal;
font-weight:500;

line-height:40px;
letter-spacing:0.01em;
color:#000000;
padding-top:0px;
margin-top:0px;
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

export const NoneScrollBar = Styled.div`
@media screen and (max-width: 1050px){
  overflow-x:scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch; 
  /* scroll-snap-type: x mandatory; */
  &::-webkit-scrollbar{
    display: none;
  }

}
`;

export const ContactHeadLine = Styled.h2`
font-weight:600;
font-size:40px; 
letter-spacing:0.01em;
padding-top:40px;
padding-left:40px;
color:#363637;
`;

export const SheetContainer = Styled(motion.div)`
padding-top:30px ;
padding-bottom:0px;
display:flex;
/* gap:20px; */
// @media screen and  (min-width: 1000px){
//   justify-content: center;
// }
// @media screen and  (min-width: 400px) and (max-width: 1000px){
//   padding-left: 30px

// }
// @media screen and  (max-width: 400px){
//   padding-left: calc( (100vw - 310px)/2 );
// }
`;
