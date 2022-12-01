import React from "react";
import { Link } from 'react-router-dom'
import styled from "styled-components";
import { useState } from "react";

const TripBox = styled.li`
border: solid black 2px;
height: 15rem;
width: 15rem;
display: grid;
grid-template-rows: 2rem 1fr 2rem ;
grid-template-columns: 1rem 1fr 1rem;
/* grid-template-areas: "a b c" "d e f"  'g h i' */

/* list-style-type: none; */

`;

const CardHeader = styled.h3`
/* align-self: center; */
/* justify-self: center; */
text-decoration: none;
/* display: flex; */
/* align-content: center; */
/* justify-content: center; */
margin: 0 auto;
grid-column: 2 / 3;
grid-row: 1 ;
align-self: center;
/* grid-area: "a b c"; */
`;

const LinkStyle = styled(Link)`
Text-decoration: none;


`;

const Price = styled.p`
/* grid-area: i; */
/* justify-content: center; */
align-self: center;
justify-self: flex-end;

grid-column: 2 /3;
grid-row: 3;
overflow: auto;
`;

const TripInfo = styled.ul`
grid-column: 2 / 3;
display: list-item;
/* flex-direction: ; */
list-style-type: none;
justify-content: start;
align-content: center;
padding: 0;
/* display: none; */

/* &:hover {
  display: block; 
} */

`;

export default function ListItem({ trip, i}) {

const [isHovering, setIsHovering] = useState(false);

const handleMouseOver = () => {
  setIsHovering(true);
};

const handleMouseOut = () => {
  setIsHovering(false);
}


// const ListItem = ({ trip, i }) => (

// Single List Item
return (
  <TripBox key={i} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
    {/* <div> */}
      <CardHeader>
        {" "}
        {/* {trip.location} */}
        <LinkStyle to={`/trips/${trip}`} > {trip.location}  </LinkStyle>
      </CardHeader>
      {/* <h4> {trip.country} </h4> */}
      <Price> Cost: {trip.price} </Price>
      <p> {trip.username}</p>
      {isHovering && (

        <TripInfo>
      <li> Rating: {trip.rating}</li>
      <li> Summary: {trip.summary}</li>
    </TripInfo>
        )}
    {/* </div> */}
    <div background={trip.image} src={trip.image}></div>
    {/* set the second ul to display on hover */}
 
  </TripBox>
);
      };

// Renders filtered list items
// const List = ({ trips }) => {
//   return (
//     <div>
//       {trips.map((trip) => (
//         <ListItem trip={trip} />
//       ))}
//     </div>
//   );
// };

// export default ListItem;
