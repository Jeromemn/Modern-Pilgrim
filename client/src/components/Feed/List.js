import React from "react";
import { Link } from 'react-router-dom'

// Single List Item
const ListItem = ({ trip }) => (
  <li key={trip.id}>
    <div>
      <h3>
        {" "}
        {trip.location}
        <Link to={`/trips/${trip._id}`}> {trip.location}</Link>
      </h3>
      <h4> {trip.country} </h4>
      <p> {trip.price} </p>
      <p> {trip.username}</p>
    </div>
    <div background={trip.image} src={trip.image}></div>
    {/* set the second ul to display on hover */}
    <ul>
      <li>{trip.rating}</li>
      <li>{trip.Summary}</li>
    </ul>
  </li>
);

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

export default ListItem;
