import React from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

// es7 snippets ( vscode extension 에서 다운로드 받을 것 )
// rfce 를 치면 기본 값 생성

const alignCenters = `
  display: flex;
  align-items: center;
`;

const HeaderWrap = styled.div`
  padding-bottom: 80px;

  .header {
    ${alignCenters}
    justify-content: space-between;
    padding: 20px;
    position: fixed;
    width: calc(100% - 40px);
    top: 0;
    left: 0;
    z-index: 9999;
    background-color: white;

    &__logo {
      height: 25px;
      object-fit: contain;
      margin-left: 20px;
    }

    &__input,
    &__icons,
    &__left {
      ${alignCenters}
    }

    &__input {
      width: 40%;
      border: 1px solid lightgray;

      input {
        flex: 1;
        border: none;
      }
    }

    &__inputButton {
      width: 50px !important;
      background: #fafafa;
      border-left: 1px solid lightgray;
      color: gray;
      cursor: pointer;
    }

    &__icon {
      margin-right: 8px;
      cursor: pointer;
    }
  }
`;

function Header() {
  return (
    <HeaderWrap>
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <img
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
            alt=""
          />
        </div>

        <div className="header__input">
          <input placeholder="Search" type="text" />
          <SearchIcon className="header__inputButton" />
        </div>

        <div className="header__icons">
          <VideoCallIcon className="header__icon" />
          <AppsIcon className="header__icon" />
          <NotificationsIcon className="header__icon" />
          <Avatar
            alt="Remy Sharp"
            src="https://avatars2.githubusercontent.com/u/24712956?s=400&u=b71527e605ae1b748fc2d4157a842e57e427ad44&v=4"
          />
        </div>
      </div>
    </HeaderWrap>
  );
}

export default Header;
