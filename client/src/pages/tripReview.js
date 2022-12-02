import { useMutation } from "@apollo/client";
import React, { useState } from "react";
// import { redirect } from "react-router-dom";
import UploadWidget from "../components/UploadWidget";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import { Cloudinary } from "@cloudinary/url-gen";

import { ADD_TRIP } from "../utils/mutations";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../components/Buttons/Button";

const Review = () => {
  const [imageId, setImageId] = useState("");
  // const [ tripForm, setTripForm] = useState('');
  const [location, setLocation] = useState("");
  const [summary, setSummary] = useState("");
  const [price, setPrice] = useState("");
  const { user } = useAuth0();
  const navigate = useNavigate();

  console.log(user);

  // const [ updateTrip, setUpdateTrip] = usestate('');

  const [addTrip, { data, loading, error }] = useMutation(ADD_TRIP);

  // const onsumbmit = async (e) => {
  //   e.preventDefault();
  //   // setTripForm()
  //   try
  // }
  // })
  const onSubmit = () => {
    addTrip({
      variables: {
        username: user.nickname,
        location,
        summary,
        price: parseInt(price),
        image: imageId,
      },
    });
  };

  const onUpload = (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Photo uploaded");
      console.log(result);
      setImageId(result.info.public_id);
    }
  };

  if (loading) return "Submitting...";
  if (error) return `Submission error! ${error.message}`;
  if (!loading && !error && data) {
    navigate("/");
    // return redirect('/')
  }
  // console.log(location);

  return (
    <>
      <HomeHeader />

      <PageContainer>
        <FormContainer>
          <InputContainer>
            <CardHeader> Tell us about your recent trip!</CardHeader>
            <Container1>
              <Label> Where did you go? </Label>
              <Input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </Container1>
            <Container1>
              <Label> About how much did it cost? </Label>
              <Input
                type="text"
                placeholder="$$$"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Container1>
            <Container1>
              <Label> What do you wish you knew before going? </Label>
              <Summary
                type="text"
                placeholder="Summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </Container1>
            <ButtonContainer>
              <UploadWidget onUpload={onUpload} />

              <Button onClick={onSubmit}> Submit </Button>
            </ButtonContainer>
          </InputContainer>
        </FormContainer>
      </PageContainer>
    </>
  );
};

export default Review;

const cld = new Cloudinary({
  cloud: {
    cloudName: "ddhobdqkx",
    apiKey: "232238398692322",
    apiSecret: "oRkkZ-sLOzBKtfHp_ph0SEEhhEI",
  },
});
const headerImage = cld.video("headerEdit");
console.log(headerImage);

const PageContainer = styled.div`
  margin-top: 2rem;
  margin-bottom: 2rem;
  /* background-color: #C2C2C1; */
`;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-content: flex-start;
  /* padding:.5rem; */
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const FormContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const InputContainer = styled.form`
  width: 35rem;
  margin: 0 auto;
  border-radius: 8px;
  /* background-color: #C2C2C1; */

  /* border: solid black 2px; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  width: 10rem;
  width: max-content;
`;

const Input = styled.input`
  width: 20rem;
  background-color: #f5f5f5;
  border-color: #cccc;
  border-radius: 6px;
  padding-left: 6px;
`;

const Summary = styled.textarea`
  height: 15rem;
  resize: none;
  width: 100%;
  overflow: auto;
  text-align: start;
  background-color: #f5f5f5;
  border-color: #cccc;
  border-radius: 6px;
  border-width: 2px;
  padding-left: 6px;


  /* padding: 1rem; */
`;

const CardHeader = styled.h2`
  /* padding-top: 1rem; */
  /* padding-left: 1rem;; */
`;

const ButtonContainer = styled.div`
  display: flex;
  align-content: center;
  justify-content: space-between;
`;

