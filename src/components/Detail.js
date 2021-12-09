import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Containter>
      <Background>
        <img src="https://cdn.vox-cdn.com/thumbor/wJ71E7nJ_4Wj0btm5seEnHNJ4Xk=/0x0:4096x2304/1200x800/filters:focal(1973x1175:2627x1829)/cdn.vox-cdn.com/uploads/chorus_image/image/60190709/BO_RGB_s120_22a_cs_pub.pub16.318.0.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://static1.squarespace.com/static/51cdafc4e4b09eb676a64e68/t/5ac4f08a6d2a73ba32fd68da/1540496405918/bau_poster.jpg" />
      </ImageTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span> Play</span>
        </PlayButton>
        <Trailer>
          <img src="/images/play-icon-white.png" />
          <span> Trailer</span>
        </Trailer>
        <AddButton></AddButton>
        <Groupwatch></Groupwatch>
      </Controls>
    </Containter>
  );
}

export default Detail;

const Containter = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5wh + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const ImageTitle = styled.div`
  height: 30vh;
  min-height: 117px;
  min-width: 200px;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const Controls = styled.div`
  display: flex;
`;
const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  padding:0 24px;
  margin-right:22px;
  display: flex;
  align-items: center;
  height:56px;
  background:rgb(249,249,249);
  border:none;
  letter-spacing:1.8px;
  cursor:pointer;

  &:hover{
  background:rgb(198,198,198);
  }
`;
const Trailer = styled(PlayButton)`
background:rgb(0,0,0,0.3);
border:1px solid rgb(249,249,249);
color:rgb(249,249,249);
text-transform:uppercase;
`;
const AddButton = styled.button``;
const Groupwatch = styled.button``;
