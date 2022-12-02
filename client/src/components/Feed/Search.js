// import { useState, useEffect } from "react";
// import React, { useState } from 'react';
// import { useLazyQuery, gql } from '@apollo/client';
import styled from 'styled-components';
import { Button } from './SearchButton';
import Flightbtn from '../../assets/Flightbtn.svg'


// for search feature to find match even partial 
// https://www.mongodb.com/docs/manual/reference/operator/query/regex/

const SearchContainer = styled.div` 
display: flex;
justify-content: center;
align-items: center;
align-content: center;
background-color: #E8F1F2;
/* line-height: 1; */
border-radius: 12px;
position: relative;
`;

const SearchBar = styled.input`
background-color: #E8F1F2;
position: relative;
height: 3rem;
font-size: 20px;
width: 20rem;
border: none;
padding-right: 1rem;
margin-right: 1rem;

/* border-radius: ; */
padding-left: .5rem;

::placeholder {
  color: black;
}

`;





const Search = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <SearchContainer>
        
        <SearchBar type="text" placeholder='Where would you like to go?' onChange={onChange} value={value} />
        <Button onClick={onSubmit}>  </Button>
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
