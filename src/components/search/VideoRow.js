import React from "react";
import styled from "styled-components";

const VideoRowWrap = styled.div`
  .videoRow {
    display: flex;
    margin-bottom: 30px;
    max-width: 700px;

    > img {
      object-fit: contain;
      width: 246px;
      height: 138px;
    }

    &__text {
      margin-left: 14px;
    }

    &__headline {
      font-size: 12px;
      color: #606060;
    }

    &__subs {
      background-color: #ecf0f1;
      padding: 2px;
    }

    &__subsNumber {
      font-weight: bolder;
      color: #3498db;
    }

    &__description {
      margin-top: 20px;
      font-size: 12px;
      color: #606060;
    }
  }
`;

function VideoRow(props) {
  const { views, subs, description, timestamp, channel, title, image } = props;
  return (
    <VideoRowWrap>
      <div className="videoRow">
        <img src={image} alt={description} />
        <div className="videoRow__text">
          <h3>{title}</h3>

          <p className="videoRow__headline">
            {channel} ·{" "}
            <span className="videoRow__subs">
              <span className="videoRow__subsNumber">{subs}</span>
            </span>{" "}
            · {views} · {timestamp}
          </p>
          <p className="videoRow__description">{description}</p>
        </div>
      </div>
    </VideoRowWrap>
  );
}

export default VideoRow;
