import React from "react";
import styled from "styled-components";

const RecommendedVideosWrap = styled.div`
  flex: 0.8;
  border: 1px solid black;
`;

function RecommendedVideos() {
  return (
    <RecommendedVideosWrap>
      <h2>This is where videos go</h2>
    </RecommendedVideosWrap>
  );
}

export default RecommendedVideos;
