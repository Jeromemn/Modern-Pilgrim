import { useMutation } from '@apollo/client';
import React, { useState } from 'react'
import UploadWidget from '../components/UploadWidget'

const Review = () => {
  // const [ tripForm, setTripForm] = useState('');
  // const [tripPhoto, setTripPhoto] = usestate('');
  // const [ updateTrip, setUpdateTrip] = usestate('');

  // const [addTrip, {error}] = useMutation(ADD_TRIP, {
  //   update(cache, {data: { addTrip }}) {
  //     cache.write
  //   }
  // const onsumbmit = async (e) => {
  //   e.preventDefault();
  //   // setTripForm()
  //   try 
  // }
  // })

  const onUpload = (result) => {

  }
  return (
<>

    <div>tripReview</div>

    <UploadWidget onUpload={onUpload} />
</>
  )
 }

export default Review;