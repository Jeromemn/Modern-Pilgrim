import styled from "styled-components";
{/* <button class="button-56" role="button">Button 56</button> */}

/* CSS */

// export const Button = styled.button`
//   align-items: center;
//   background-color: #fee6e3;
//   border: 2px solid #111;
//   border-radius: 8px;
//   box-sizing: border-box;
//   color: #111;
//   cursor: pointer;
//   display: flex;
//   font-family: Inter,sans-serif;
//   font-size: 16px;
//   height: 48px;
//   justify-content: center;
//   line-height: 24px;
//   max-width: 100%;
//   padding: 0 25px;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;


// :after {
//   background-color: #111;
//   border-radius: 8px;
//   content: "";
//   display: block;
//   height: 48px;
//   left: 0;
//   width: 100%;
//   position: absolute;
//   top: -2px;
//   transform: translate(8px, 8px);
//   transition: transform .2s ease-out;
//   z-index: -1;
// }

// &&:hover:after {
//   transform: translate(0, 0);
// }

// &&:active {
//   background-color: #ffdeda;
//   outline: 0;
// }

// &&:hover {
//   outline: 0;
// }

// @media (min-width: 768px) {
//   .button-56 {
//     padding: 0 40px;
//   }
// }


// `;

// import styled from "styled-components";
// import Flightbtn from '../../assets/Flightbtn.svg'


export const Button = styled.button`

  align-items: center;
  background-color: #E8F1F2;
  border-bottom-left-radius: 12px;
  border-top-left-radius: 12px;
  /* border: solid black 2px; */
  /* box-shadow: transparent 0 0 0 3px,rgba(18, 18, 18, .1) 0 6px 20px; */
  box-sizing: border-box;
  font-size: 20px;
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
  /* background-position: center; */
  /* background-repeat: no-repeat; */

  height: 3rem;
  width: 5rem;
    

&&:hover {
  box-shadow: #121212 0 0 0 3px, transparent 0 0 0 0;


}
`;