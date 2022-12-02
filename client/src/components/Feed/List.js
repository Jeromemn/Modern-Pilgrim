import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { AdvancedImage } from "@cloudinary/react";
// import madrid from '../../assets/madrid.jpg'

const TripBox = styled.li`
  border: solid black 2px;
  height: 15rem;
  width: 15rem;
  display: grid;
  grid-template-rows: 2rem 1fr 2rem;
  grid-template-columns: 1rem 1fr 1rem;
  background-image: url(${({$image}) => $image });
  background-image: cover;
  background-size: 25rem;
  /* background-clip: border-box; */
  background-repeat: no-repeat;
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
  grid-row: 1;
  align-self: center;
  /* color: white; */
  /* grid-area: "a b c"; */
`;

const LinkStyle = styled(Link)`
  text-decoration: none;
  color: white;
`;

const Price = styled.p`
  /* grid-area: i; */
  /* justify-content: center; */
  align-self: center;
  justify-self: flex-end;
  color: white;

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
  color: white;

  /* display: none; */

  /* &:hover {
  display: block; 
} */
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
  console.log(trip.image)

  // const ListItem = ({ trip, i }) => (

  // Single List Item
  return (
    <TripBox key={i} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} $image={tripImage}>
      {/* <div> */}
      {/* <AdvancedImage cldImg={tripImage} /> */}
      <CardHeader>
        {" "}
        {/* {trip.location} */}
        <LinkStyle to={`/trips/${trip}`}> {trip.location} </LinkStyle>
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
