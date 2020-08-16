import React from "react";
import "./App.css";
import { Header } from "./components/common/";
import { Sidebar } from "./components/common/";
import { RecommendedVideos } from "./components/main/";

function App() {
  return (
    // BEM class naming convention을 사용
    <div className="app">
      {/* <h1>Hello Clever Programmer, let's build a youtube clone</h1> */}

      <Header />
      <div className="app__page">
        <Sidebar />
        <RecommendedVideos />
      </div>
      {/* <Sidebar /> */}

      {/* Header 헤더 -> <Header />*/}
      {/* Sidebar 사이드바 -> <Sidebar /> */}
      {/* RecommendedVideo 추천 동영상 */}
    </div>
  );
}

export default App;
