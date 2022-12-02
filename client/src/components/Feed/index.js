// import { Link } from "react-router-dom";
import ListItem from "./List.js";
import Search from "./Search";
import { useQuery } from "@apollo/client";
import React, { useState, useEffect } from "react";
import Filters from "./Filter";
// import { QUERY_TRIPS } from "../../utils/queries.js";
import { FIND_TRIP } from "../../utils/queries.js";
import styled from "styled-components";



const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
`;

const TripsContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
  padding: 5rem;
  list-style-type: none;
`;

//  testing
const FeedCont = () => {
  const useTripsSearchFilter = () => {
    const [filters, _updateSearchFilter] = useState({
      id: undefined,
      location: undefined,
    });

    const updateSearchFilter = (filterType, value) => {
      _updateSearchFilter({
        [filterType]: value,
      });
    };

    return {
      models: { filters },
      operations: { updateSearchFilter },
    };
  };
  // feedcount was here
  const { operations, models } = useTripsSearchFilter();
  const { data: trips, loading, error, refetch } = useQuery(FIND_TRIP);

  if (loading) {
    return <div> Loading..</div>;
  }
  if (error) {
    console.log(error);
    return <div> Error </div>;
  }

  return (
    <div>
      <FilterContainer>
        <Filters />{" "}
        <Search
          onChange={(e) =>
            operations.updateSearchFilter("location", e.target.value)
          }
          type="string"
          onSubmit={() =>
            refetch({
              tripsInput: { location: models.filters.location },
            })
          }
          // value={search}
          // onSubmit={handleFilterTrips}
        />
        {/* <Filters /> */}
      </FilterContainer>
      <TripsContainer>
        {/* maybe {[].map */}
        {trips.trip.map((trip, i) => (
          <ListItem trip={trip} key={i} />
        ))}
      </TripsContainer>
    </div>
  );
};

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
