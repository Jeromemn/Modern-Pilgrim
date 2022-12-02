import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
// import madrid from '../../assets/madrid.jpg'

const TripBox = styled.li`
  border: solid black 1px;
  height: 15rem;
  width: 15rem;
  display: grid;
  grid-template-rows: 3.5rem 1fr 2rem;
  grid-template-columns: 1rem 1fr 1rem;
  background-image: url(${({$image}) => $image });
  background-image: cover;
  background-size: 25rem;
  margin: 1rem;
  background-repeat: no-repeat;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;

  

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
  grid-row: 1;
  align-self: center;
  position: relative;
  overflow: hidden;
  width: fit-content;
  /* color: white; */
  /* grid-area: "a b c"; */
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 300;
  position: relative;

  :hover{
    color: black;
  }
`;

const Price = styled.p`
  /* grid-area: i; */
  /* justify-content: center; */
  align-self: center;
  justify-self: flex-start;
  color: #000000;
  font-size: 1.5em;
  font-weight: 500;
  grid-column: 2 /3;
  grid-row: 3;
  overflow: auto;
`;

const TripInfo = styled.ul`
  grid-column: 2 / 3;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  justify-content: center;
  align-content: center;
  padding: 0;
  color: black;
  font-weight: 800;
  overflow: hidden;
  /* justify-items: center; */
  /* align-items: center; */


`;

const cld = new Cloudinary({
  cloud: {
    cloudName: "ddhobdqkx",
    apiKey: "232238398692322",
    apiSecret: "oRkkZ-sLOzBKtfHp_ph0SEEhhEI",
  },
});

//  react hook query for images
// server install
// set api

export default function ListItem({ trip, i }) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const tripImage = cld.image(trip.image).toURL();
  // console.log(trip.image)

  // const ListItem = ({ trip, i }) => (

  // Single List Item
  return (
    <TripBox key={i} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} $image={tripImage}>
      {/* <div> */}
      {/* <AdvancedImage cldImg={tripImage} /> */}
      <CardHeader>
        {" "}
        {/* {trip.location} */}
        <LinkStyle to={`/trips/:${trip.id}`}> {trip.location} </LinkStyle>
      </CardHeader>
      {/* <h4> {trip.country} </h4> */}
      <Price> Cost: {trip.price} </Price>
      {isHovering && (
        <TripInfo>
          <li> User: {trip.username}</li>
          <li> Rating: {trip.rating}</li>
          <li> Summary: {trip.summary}</li>
        </TripInfo>
      )} 
      {/* </div> */}

      {/* <div background={trip.image} src={trip.image}></div> */}
      {/* set the second ul to display on hover */}
    </TripBox>
  );
}

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
