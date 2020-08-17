import React from "react";
import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { CheckCircleOutlineOutlined as CheckVerified } from "@material-ui/icons";

const ChannelRowWrap = styled.div`
  .channelRow {
    display: flex;
    align-items: center;
    width: 70%;

    &__text {
      display: flex;
      flex-direction: column;

      p {
        color: #606060;
        font-size: small !important;
      }
    }

    &__logo {
      height: 120px !important;
      width: 120px !important;
      margin: 10px 60px;
    }

    &__text {
      h4 {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
  }
`;

function ChannelRow(props) {
  const {
    image,
    channel,
    verified,
    subs,
    noOfiVideos,
    description,
  } = props.ChannelRowData;
  return (
    <ChannelRowWrap>
      <div className="channelRow">
        <Avatar className="channelRow__logo" alt={channel} src={image} />
        <div className="channelRow__text">
          <h4>
            {channel} {verified && <CheckVerified />}{" "}
          </h4>
          <p>
            {subs} · {noOfiVideos}
          </p>
          <p>{description}</p>
        </div>
      </div>
    </ChannelRowWrap>
  );
}

export default ChannelRow;
