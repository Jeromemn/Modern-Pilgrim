import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { redirect } from "react-router-dom";
import UploadWidget from '../components/UploadWidget';
import { useNavigate } from "react-router-dom";

import { ADD_TRIP } from '../utils/mutations';
import { useAuth0 } from '@auth0/auth0-react';

const Review = () => {
  const [ imageId, setImageId] = useState('');
  // const [ tripForm, setTripForm] = useState('');
  const [location, setLocation] = useState('');
  const [summary, setSummary] = useState('');
  const [price, setPrice] = useState('');
  const { user } = useAuth0();
  const navigate = useNavigate();

  console.log(user);

  // const [ updateTrip, setUpdateTrip] = usestate('');

  const [addTrip,  { data, loading, error}] = useMutation(ADD_TRIP);
    

  // const onsumbmit = async (e) => {
  //   e.preventDefault();
  //   // setTripForm()
  //   try 
  // }
  // })
  const onSubmit = () => {
    addTrip({variables: {
      username: user.nickname,
      location,
      summary,
      price: parseInt(price),
      image: imageId
    }})

  }

  const onUpload = (error, result) => {
    if (!error && result && result.event === "success") {
      console.log('Photo uploaded');
      console.log(result);
      setImageId(result.info.public_id);
    }
  }

  if (loading) return 'Submitting...';
  if (error) return `Submission error! ${error.message}`;
  if (!loading && !error && data) {
    navigate("/");
    // return redirect('/')
     
  }
  // console.log(location);
  return (
<>

    <div>tripReview</div>

    <input type="text" placeholder='location' value={location} onChange={(e) => setLocation(e.target.value)} /> 
    <input type="text" placeholder='price' value={price} onChange={(e) => setPrice(e.target.value)}/>
    <input type="text" placeholder='summary' value={summary} onChange={(e) => setSummary(e.target.value)}/>

    <UploadWidget onUpload={onUpload} />

    <button onClick={onSubmit} > Submit </button>
</>
  )
 }

export default Review;