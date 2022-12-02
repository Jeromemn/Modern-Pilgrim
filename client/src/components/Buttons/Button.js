import styled from "styled-components";

const Primary = styled.button`
  background-color: #436fc7;
  border-radius: 8px;
  border-style: none;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial,
    sans-serif;
  font-size: 14px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  list-style: none;
  margin: 0;
  outline: none;
  padding: 10px 16px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: color 100ms;
  vertical-align: baseline;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  :hover,
  &&:focus {
    background-color: #2a4b8d;
  }
`;

const Secondary = styled(Primary)`
background-color: #fff;
border: 2px solid #436fc7;
color: black;

:hover {
    color: white;
    border-color: #2a4b8d;
}


`;

const variants = {
  primary: Primary,
  secondary: Secondary,
};

const Button = ({ variant = 'primary', children, ...rest }) => {
  const Btn = variants[variant] || variants.primary;
  return <Btn {...rest}>{children}</Btn>;
};

export default Button;
