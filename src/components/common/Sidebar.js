import React from "react";
import styled from "styled-components";
import SidebarRow from "./SidebarRow";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

const SidebarWrap = styled.div`
  flex: 0.2;
`;

function Sidebar() {
  return (
    <SidebarWrap>
      <SidebarRow selected title="Home" Icon={HomeIcon} />
      <SidebarRow title="Trending" Icon={WhatshotIcon} />
      <SidebarRow title="Subscription" Icon={SubscriptionsIcon} />
    </SidebarWrap>
  );
}

export default Sidebar;
