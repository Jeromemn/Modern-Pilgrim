// import { useState, useEffect } from "react";
// import React, { useState } from 'react';
// import { useLazyQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import { Button } from './SearchButton';


// for search feature to find match even partial 
// https://www.mongodb.com/docs/manual/reference/operator/query/regex/

const SearchContainer = styled.div` 
display: flex;
justify-content: center;
align-items: center;
align-content: center;
background-color: blue;
/* line-height: 1; */
border-radius: 12px;
`;

const SearchBar = styled.input`
background-color: blue;
position: relative;
height: 5rem;
font-size: 30px;
width: fit-content;
border: none;

/* border-radius: ; */
padding-right: 10px;

::placeholder {
  color: black;
}

`;





const Search = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <SearchContainer>
        
        <SearchBar type="text" placeholder='Where would you like to go?' onChange={onChange} value={value} />
        <Button onClick={onSubmit}> <span class="material-symbols-outlined md-48">
flight_takeoff
</span> </Button>
      </SearchContainer>
      {/* 
        {data && 
        data.feed.links.map((link, index) => (
            <link key={link.id} link={link} index={index} />
        ))} */}
    </>
  );
};

// const Search = (props) => {
//   return (
//     <>
//       <div>
//       <label> Search </label>  
//       <input
//           onChange={props.handleInputChange}
//           value={props.value}
//           name="search"
//           type="text"
//           className="form-control"
//           placeholder="Search For a Movie"
//           id="search"
//         />
//         <button
//           onClick={props.handleFormSubmit}
//           className="btn btn-primary"
//           type="submit"
//         >
//           Search
//         </button>
//       </div>
      

//     </>
//   );
// };



export default Search;
