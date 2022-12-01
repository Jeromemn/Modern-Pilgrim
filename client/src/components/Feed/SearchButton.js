import styled from "styled-components";
import Flightbtn from '../../assets/Flightbtn.svg'


export const Button = styled.button`

  align-items: center;
  background-color: #E8F1F2;
  border-radius: 12px;
  /* box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px; */
  box-sizing: border-box;
  /* color: #121212; */
  cursor: pointer;
  display: inline-flex;
  flex: 1 1 auto;
  font-family: Inter,sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  justify-content: center;
  line-height: 1;
  margin: 0 auto;
  outline: none;
  padding: 1rem 1.2rem;
  text-align: center;
  text-decoration: none;
  transition: box-shadow .2s,-webkit-box-shadow .2s;
  white-space: nowrap;
  border: 0;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  background-position: center;
  background-image: url(${Flightbtn});
  background-repeat: no-repeat;

  height: 3rem;
  width: 5rem;
    

&&:hover {
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;


}
`;
