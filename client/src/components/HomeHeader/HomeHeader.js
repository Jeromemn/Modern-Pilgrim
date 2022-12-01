// import { useHistory, Link } from "react-router-dom";
// import videoHeader from "../../assets/headerEdit.mp4";
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedVideo } from '@cloudinary/react';
// import {fill} from "@cloudinary/url-gen/actions/resize";


import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 20rem;
  display: cover;
  z-index: 1;
 
`;

const VideoWrapper = styled.div`
position: relative;
height: 20rem;
overflow: hidden;
text-align: center;
display: flex;
align-items: center;
/* justify-content: center; */
z-index: -1;

`;

const Video = styled.video`
position: absolute;
display: block;
top: 0;
/* margin-top: 5rem; */
left: 0;
object-fit: cover;
height: 100%;
width: 100%;
z-index: -1;
`;

const Header1 = styled.h1`
font-size: 3rem;
z-index: 1;
/* float: left; */
align-self: flex-end;
justify-self: flex-start;
/* left: 0; */
padding-left: 1rem;
margin: 0 0;

`;

const TitleContainer = styled.div`
z-index: 9;

`;


const cld = new Cloudinary({
  cloud: {
    cloudName: 'ddhobdqkx',
    apiKey: '232238398692322',
    apiSecret: 'oRkkZ-sLOzBKtfHp_ph0SEEhhEI',

  }
});

export default function HeaderContainer() {
  const headerImage = cld.video('headerEdit')
  console.log(headerImage);
  return (
    <>
      <Header>
        <TitleContainer>

        <VideoWrapper>
        <AdvancedVideo cldVid={headerImage} autoPlay muted loop />

          {/* <video
            src={headerImage}
            type="video/mp4"
            autoPlay
            muted
            loop
            ></video>  */}
            <Header1> Modern Pilgrims </Header1>
        </VideoWrapper>
            </TitleContainer>
      </Header>
    </>
  );
}
