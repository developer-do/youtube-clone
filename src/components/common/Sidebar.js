import React from "react";
import styled from "styled-components";
import SidebarRow from "./SidebarRow";
import {
  Home,
  Whatshot,
  Subscriptions,
  VideoLibrary,
  History,
  OndemandVideo,
  WatchLater,
  ThumbUpAltOutlined,
  ExpandMore,
} from "@material-ui/icons";

const SidebarWrap = styled.div`
  flex: 0.2;

  hr {
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

function Sidebar() {
  return (
    <SidebarWrap>
      <SidebarRow selected title="Home" Icon={Home} />
      <SidebarRow title="Trending" Icon={Whatshot} />
      <SidebarRow title="Subscription" Icon={Subscriptions} />
      <hr />
      <SidebarRow Icon={VideoLibrary} title="Library" />
      <SidebarRow Icon={History} title="History" />
      <SidebarRow Icon={OndemandVideo} title="Your videos" />
      <SidebarRow Icon={WatchLater} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltOutlined} title="Liked videos" />
      <SidebarRow Icon={ExpandMore} title="Show more" />
      <hr />
    </SidebarWrap>
  );
}

export default Sidebar;
