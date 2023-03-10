import styled from "styled-components"
import {motion} from "framer-motion"
export const Button = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 18px;
  left: 29px;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
`;

export const Li = styled(motion.li)`
list-style: none;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`
export const Ul = styled(motion.ul)`
 padding: 25px;
  position: absolute;
  top: 100px;
  width: 230px;
`

export const IconPlaceholder = styled.div`
width: 40px;
  height: 40px;
  border-radius: 50%;
  flex: 40px 0;
  margin-right: 20px;
`
export const TextPlaceholder = styled.div`
  border-radius: 5px;
  width: 200px;
  height: 20px;
  flex: 1;
`