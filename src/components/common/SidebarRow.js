import React from "react";
import styled from "styled-components";

const alignCenters = `
  display: flex;
  align-items: center;
`;

const SideBarRows = styled.div`
  ${alignCenters}
`;

function SidebarRow(props) {
  const { title, Icon } = props;
  return (
    <SideBarRows>
      <Icon />
      <h2>{title}</h2>
    </SideBarRows>
  );
}

export default SidebarRow;
