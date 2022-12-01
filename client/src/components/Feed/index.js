// import { Link } from "react-router-dom";
import ListItem from "./List.js";
import Search from "./Search";
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Filters from "./Filter";
// import { QUERY_TRIPS } from "../../utils/queries.js";
import { FIND_TRIP } from "../../utils/queries.js";

// import styled from 'styled-components';

// import * as React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
// import Grid from '@mui/material/Unstable_Grid2';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(2),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//   }));

// const CardContainer = styled.ul`
// display: grid;
// grid-template-columns: .2fr .2fr .2fr ;
// grid-template-rows: .2fr .2fr .2fr .2fr;
// `;

// const TripItem = styled(li)(({ theme }) => ({
//     list-style: none,
// }));

// const mockTrips = [
//   {
//     id: 1,
//     name: "Some Dope Trip",
//     city: "Mesa",
//     state: "Arizona",
//     country: "united states",
//     description: "Sickest trip of my life",
//     price: "500.00",
//   },
//   {
//     id: 2,
//     name: "Some Dope Trip2",
//     city: "New York",
//     state: "New York",
//     description: "Sickest trip of my life2",
//     price: "500.00",
//   },
//   {
//     id: 3,
//     name: "Some Dope Trip",
//     city: "Mesa",
//     state: "Arizona",
//     description: "Sickest trip of my life",
//     price: "500.00",
//   },
//   {
//     id: 4,
//     name: "Some Dope Trip",
//     city: "Mesa",
//     state: "Arizona",
//     description: "Sickest trip of my life",
//     price: "500.00",
//   },
//   {
//     id: 5,
//     name: "Some Dope Trip",
//     city: "Mesa",
//     state: "Arizona",
//     description: "Sickest trip of my life",
//     price: "500.00",
//   },
// ];

// const Feed = () => {
//     // const [result, setResult] = useState({});

//   const [search, setSearch] = useState("");
//   const [price, setPrice] = useState("");
//   // const [searchFilter, setSearchFilter] = useState('');
//   const {
//     data: trips,
//     loading,
//     error,
//     fetchMore,
//   } = useQuery(`query.....`, { variables });

//   const handleChange = (e) => setSearch(e.target.value);
//   const handleFilterTrips = () => {
//     fetchMore({ variables: { location: search, price: price } });
//   };
//   // const upDateChange = (e) => setSearchFilter(e.target.value);
// //   const searchTrips = (query) =>
// //     API.search(query)
// //       .then((res) => setResult(res.data))
// //       .catch((err) => console.log(err));

//   if (error) {
//     console.log(error);
//   }

//   if (loading) {
//     return <p>loading...</p>;
//   }


//   return (
//     <div>
//       <Search
//         onChange={handleChange}
//         value={search}
//         onSubmit={handleFilterTrips}
//       />
//       <Filters />
//       <List items={mockTrips} />
//     </div>
//   );
// };


//  testing
const FeedCont = () => {

const useTripsSearchFilter = () => {
  const [ filters, _updateSearchFilter] = useState({
    id: undefined,
    location:undefined
  });

  const updateSearchFilter = (filterType, value) => {
    _updateSearchFilter({
      [filterType]: value,
    });
  };

  return {
    models: { filters }, 
    operations: { updateSearchFilter },
  }
}
  // feedcount was here
  const { operations, models } = useTripsSearchFilter();
  const { data: trips , loading, error, refetch } = useQuery(FIND_TRIP);

  if (loading) {
  return <div> Loading..</div>
  }
  if (error) {
    console.log(error)
  return <div> Error </div>
  }


  
  
  return (
    <div>
      <div>
           <Search
        onChange={(e) => operations.updateSearchFilter("location", e.target.value)}
        type="string"
        onSubmit={() => 
        refetch({
          tripsInput: { location: models.filters.location },
        })}
        // value={search}
        // onSubmit={handleFilterTrips}
      />
      </div>
      <Filters />
      <div>
        {/* maybe {[].map */}
      {trips.trip.map((trip) => (
        <ListItem trip={trip} />
        ))}
        </div>

    </div>
  )
}



export default FeedCont;

// function Feed() {
    
//   return (
//     <>
//       <div>
//       <Box sx={{ flexGrow: 1 }}>
//       <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
//         {/* <CardContainer> */}
//           {/* {mockTrips && */}
//             {mockTrips.map((mockTrip, i) => (
//                 <Grid xs={2} sm={4} md={4} key={i}>
//             <Item>

//               <ListItem key={mockTrip.id}>
//                 <div>
//                   <h3>
//                     {" "}
//                     {mockTrip.city}
//                     <Link to={`/mockTrip/${mockTrip._id}`}> {mockTrip.state}</Link>
//                   </h3>
//                   <h4> {mockTrip.country} </h4>
//                   <p> {mockTrip.price} </p>
//                   <p> {mockTrip.name}</p>
//                 </div>
//                 <div background={mockTrip.image} src={mockTrip.image}></div>
//                 {/* set the second ul to display on hover */}
//                 <ul>
//                   <li>{mockTrip.rating}</li>
//                   <li>{mockTrip.description}</li>
//                 </ul>
//               </ListItem>
//             </Item>
//             </Grid>
//             ))}
//         {/* </CardContainer> */}
//         </Grid>
//     </Box>
//       </div>
//     </>
//   );
// };


