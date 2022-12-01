// import { useState, useEffect } from "react";
import React, { useState } from 'react';
import { useLazyQuery, gql } from '@apollo/client';

// for search feature to find match even partial 
// https://www.mongodb.com/docs/manual/reference/operator/query/regex/

const Search = ({ value, onChange, onSubmit }) => {
  return (
    <>
      <div>
        Search
        <input type="text" onChange={onChange} value={value} />
        <button onClick={onSubmit}> Search </button>
      </div>
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
