import React from "react";
import { TuneOutlined } from "@material-ui/icons";
import styled from "styled-components";

const SearchPageWrap = styled.div``;

function SearchPage() {
  return (
    <SearchPageWrap>
      <div className="searchPage">
        <div className="searchPage__filter">
          <TuneOutlined />
          <h2>FILTER</h2>
        </div>
      </div>
    </SearchPageWrap>
  );
}

export default SearchPage;
