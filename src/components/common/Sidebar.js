import React from "react";
import styled from "styled-components";
import SidebarRow from "./SidebarRow";

const SidebarWrap = styled.div`
  flex: 0.2;
`;

function Sidebar() {
  return (
    <SidebarWrap>
      <h2>I am a Sidebar</h2>
      <SidebarRow />
    </SidebarWrap>
  );
}

export default Sidebar;
