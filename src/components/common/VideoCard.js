import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const VideoCardWrap = styled.div`
  .videoCard {
    width: 270px;
    margin-bottom: 40px;

    &__thumbnail {
      width: 250px;
      height: 140px;
    }

    &__info {
      display: flex;
      padding-right: 40px;
    }

    &__text {
      flex: 1;

      h4 {
        font-size: 14px;
        margin-bottom: 4px;
      }
      p {
        font-size: 12.5px;
      }
    }

    &__avatar {
      margin-right: 10px;
    }

    &__image {
    }
  }
`;

function VideoCard(props) {
  const { iamge, title, channel, views, timestamp, channelImage } = props;
  return (
    <VideoCardWrap>
      <div className="videoCard">
        <img src={iamge} alt="" className="videoCard__thumbnail" />
        <div className="videoCard__info">
          <Avatar
            className="videoCard__avatar"
            alt={channel}
            src={channelImage}
          />
          <div className="videoCard__text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>
              {views} · {timestamp}
            </p>
          </div>
        </div>
      </div>
    </VideoCardWrap>
  );
}

export default VideoCard;
