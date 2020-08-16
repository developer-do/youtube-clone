import React from "react";
import styled from "styled-components";

const SidebarWrap = styled.div`
  flex: 0.2;
`;

function Sidebar() {
  return (
    <SidebarWrap>
      <h2>I am a Sidebar</h2>
    </SidebarWrap>
  );
}

export default Sidebar;
