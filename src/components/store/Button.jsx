import styled from "styled-components";

const ButtonBox = styled.button`
  border: 1px solid #E66F75;
  background-color: #E66F75;
  border-radius: 6px;
  width: ${props => props.width || '520px'};
  padding-top: 15px;
  padding-bottom: 15px;
  margin-bottom: 10px;
  color: white;
  font-size: medium;
  font-weight: bold;
  &:hover {
    background-color: #c94d53;
    cursor: pointer;
  }
`;

const Button = (props) => {
  return (
    <ButtonBox width={props.width} >{props.children}</ButtonBox>
  )
}

export default Button;