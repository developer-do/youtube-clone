import React from "react";
import styled from "styled-components";

const alignCenters = `
  display: flex;
  align-items: center;
`;

const commonActiveRow = `
  .sidebarRow__icon {
    color: red;
  }

  .sidebarRow__title {
    font-weight: bold;
  }
`;

const SideBarRows = styled.div`
  .sidebarRow {
    ${alignCenters}
    padding: 10px 20px;
    transition: all 0.2s;

    &.selected {
      background: lightgray;

      ${commonActiveRow}
    }

    &:hover {
      background-color: lightgray;
      cursor: pointer;

      ${commonActiveRow}
    }

    &__icon {
      color: #606060;
      font-size: large !important;
      transition: all 0.2s;
    }

    &__title {
      flex: 1;
      margin-left: 20px;
      font-size: 12px;
      font-weight: 500;
      transition: all 0.2s;
    }
  }
`;

function SidebarRow(props) {
  const { title, Icon, selected } = props;
  return (
    <SideBarRows>
      <div class={`sidebarRow ${selected && "selected"}`}>
        <Icon className="sidebarRow__icon" />
        <h2 className="sidebarRow__title">{title}</h2>
      </div>
    </SideBarRows>
  );
}

export default SidebarRow;
