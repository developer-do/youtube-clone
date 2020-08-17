import React from "react";
import styled from "styled-components";
import { VideoCard } from "../common";

const RecommendedVideosWrap = styled.div`
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 40px 20px;
  padding-bottom: 0;
  .recommendedVideos {
    h2 {
      margin-left: 5px;
      margin-bottom: 20px;
    }
  }
`;

function RecommendedVideos() {
  return (
    <RecommendedVideosWrap>
      <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>
      </div>
    </RecommendedVideosWrap>
  );
}

export default RecommendedVideos;
