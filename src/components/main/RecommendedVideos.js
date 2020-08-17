import React from "react";
import styled from "styled-components";
import { VideoCard } from "../common";

const RecommendedVideosWrap = styled.div`
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 40px 20px;
  padding-bottom: 0;
  .recommendedVideos {
    h2 {
      margin-left: 5px;
      margin-bottom: 20px;
    }

    &__videos {
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

const VideoInfos = [
  {
    title: "미국 배 잘못건드린 소말리아 해적의 최후 (결말포함)",
    views: "조회수 295만회",
    timestamp: "1년 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgYZxqcIVjCldNBD4Isf8sR83VEYA5PEGIXyQ=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "노바디시네마 nobody cinema",
    iamge:
      "https://i.ytimg.com/vi/8xfb9MrEsac/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCArvqgIz-Ug61yjb1FetwEcGM1vQ",
  },
  {
    title: "듣는순간 갱스터가 되는 외힙모음 [Playlist]",
    views: "조회수 6.2만회",
    timestamp: "4개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgiXcD_HdapkAHC_qKktzOXFX0HNYwmLC5b3Q=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "쥅쥅",
    iamge:
      "https://i.ytimg.com/vi/7RqVJGpZ4-E/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLD-papITnixaU8ibbcoDeOY4avAVA",
  },
  {
    title: "꾹뚝",
    views: "조회수 1.4만회",
    timestamp: "1시간 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ggd7Ntl6g1Q0InJgehJ4wAxGfldE-zr0MmH=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "런닝맨 - 스브스 공식 채널",
    iamge:
      "https://i.ytimg.com/vi/ItOBzI6b0AM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABzZf173yRp2ri5O9Vz54UekaZNg",
  },
  {
    title:
      "경찰특공대와 707특임단의 인질구출 합동작전 직캠, 코로나 위기 잘 극복합시다! SWAT and 707 Special Forces",
    views: "조회수 5.7만회",
    timestamp: "5개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ghhjw9UvnMOOx0j3tYPLe0idBAd9TMgN3-aRA=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "여기요TV [Here TV]",
    iamge:
      "https://i.ytimg.com/vi/fdgYsDY7yco/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcNNzYJed7wnkppWfypHgRHga_3A",
  },
  {
    title: "JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]",
    views: "조회수 95만회",
    timestamp: "9개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "Clever Programmer",
    iamge:
      "https://i.ytimg.com/vi/Qqx_wzMmFeA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4E7lNmU8F0kwZ520ia5N7KsWbhg",
  },
  {
    title: "미국 배 잘못건드린 소말리아 해적의 최후 (결말포함)",
    views: "조회수 295만회",
    timestamp: "1년 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgYZxqcIVjCldNBD4Isf8sR83VEYA5PEGIXyQ=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "노바디시네마 nobody cinema",
    iamge:
      "https://i.ytimg.com/vi/8xfb9MrEsac/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCArvqgIz-Ug61yjb1FetwEcGM1vQ",
  },
  {
    title: "듣는순간 갱스터가 되는 외힙모음 [Playlist]",
    views: "조회수 6.2만회",
    timestamp: "4개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgiXcD_HdapkAHC_qKktzOXFX0HNYwmLC5b3Q=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "쥅쥅",
    iamge:
      "https://i.ytimg.com/vi/7RqVJGpZ4-E/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLD-papITnixaU8ibbcoDeOY4avAVA",
  },
  {
    title: "꾹뚝",
    views: "조회수 1.4만회",
    timestamp: "1시간 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ggd7Ntl6g1Q0InJgehJ4wAxGfldE-zr0MmH=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "런닝맨 - 스브스 공식 채널",
    iamge:
      "https://i.ytimg.com/vi/ItOBzI6b0AM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABzZf173yRp2ri5O9Vz54UekaZNg",
  },
  {
    title:
      "경찰특공대와 707특임단의 인질구출 합동작전 직캠, 코로나 위기 잘 극복합시다! SWAT and 707 Special Forces",
    views: "조회수 5.7만회",
    timestamp: "5개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ghhjw9UvnMOOx0j3tYPLe0idBAd9TMgN3-aRA=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "여기요TV [Here TV]",
    iamge:
      "https://i.ytimg.com/vi/fdgYsDY7yco/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcNNzYJed7wnkppWfypHgRHga_3A",
  },
  {
    title: "JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]",
    views: "조회수 95만회",
    timestamp: "9개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "Clever Programmer",
    iamge:
      "https://i.ytimg.com/vi/Qqx_wzMmFeA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4E7lNmU8F0kwZ520ia5N7KsWbhg",
  },
  {
    title: "미국 배 잘못건드린 소말리아 해적의 최후 (결말포함)",
    views: "조회수 295만회",
    timestamp: "1년 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgYZxqcIVjCldNBD4Isf8sR83VEYA5PEGIXyQ=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "노바디시네마 nobody cinema",
    iamge:
      "https://i.ytimg.com/vi/8xfb9MrEsac/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCArvqgIz-Ug61yjb1FetwEcGM1vQ",
  },
  {
    title: "듣는순간 갱스터가 되는 외힙모음 [Playlist]",
    views: "조회수 6.2만회",
    timestamp: "4개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgiXcD_HdapkAHC_qKktzOXFX0HNYwmLC5b3Q=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "쥅쥅",
    iamge:
      "https://i.ytimg.com/vi/7RqVJGpZ4-E/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLD-papITnixaU8ibbcoDeOY4avAVA",
  },
  {
    title: "꾹뚝",
    views: "조회수 1.4만회",
    timestamp: "1시간 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ggd7Ntl6g1Q0InJgehJ4wAxGfldE-zr0MmH=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "런닝맨 - 스브스 공식 채널",
    iamge:
      "https://i.ytimg.com/vi/ItOBzI6b0AM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABzZf173yRp2ri5O9Vz54UekaZNg",
  },
  {
    title:
      "경찰특공대와 707특임단의 인질구출 합동작전 직캠, 코로나 위기 잘 극복합시다! SWAT and 707 Special Forces",
    views: "조회수 5.7만회",
    timestamp: "5개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ghhjw9UvnMOOx0j3tYPLe0idBAd9TMgN3-aRA=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "여기요TV [Here TV]",
    iamge:
      "https://i.ytimg.com/vi/fdgYsDY7yco/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcNNzYJed7wnkppWfypHgRHga_3A",
  },
  {
    title: "JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]",
    views: "조회수 95만회",
    timestamp: "9개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "Clever Programmer",
    iamge:
      "https://i.ytimg.com/vi/Qqx_wzMmFeA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4E7lNmU8F0kwZ520ia5N7KsWbhg",
  },
  {
    title: "미국 배 잘못건드린 소말리아 해적의 최후 (결말포함)",
    views: "조회수 295만회",
    timestamp: "1년 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgYZxqcIVjCldNBD4Isf8sR83VEYA5PEGIXyQ=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "노바디시네마 nobody cinema",
    iamge:
      "https://i.ytimg.com/vi/8xfb9MrEsac/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCArvqgIz-Ug61yjb1FetwEcGM1vQ",
  },
  {
    title: "듣는순간 갱스터가 되는 외힙모음 [Playlist]",
    views: "조회수 6.2만회",
    timestamp: "4개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GgiXcD_HdapkAHC_qKktzOXFX0HNYwmLC5b3Q=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "쥅쥅",
    iamge:
      "https://i.ytimg.com/vi/7RqVJGpZ4-E/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLD-papITnixaU8ibbcoDeOY4avAVA",
  },
  {
    title: "꾹뚝",
    views: "조회수 1.4만회",
    timestamp: "1시간 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ggd7Ntl6g1Q0InJgehJ4wAxGfldE-zr0MmH=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "런닝맨 - 스브스 공식 채널",
    iamge:
      "https://i.ytimg.com/vi/ItOBzI6b0AM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLABzZf173yRp2ri5O9Vz54UekaZNg",
  },
  {
    title:
      "경찰특공대와 707특임단의 인질구출 합동작전 직캠, 코로나 위기 잘 극복합시다! SWAT and 707 Special Forces",
    views: "조회수 5.7만회",
    timestamp: "5개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14Ghhjw9UvnMOOx0j3tYPLe0idBAd9TMgN3-aRA=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "여기요TV [Here TV]",
    iamge:
      "https://i.ytimg.com/vi/fdgYsDY7yco/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAcNNzYJed7wnkppWfypHgRHga_3A",
  },
  {
    title: "JavaScript Tutorial for Beginners - Full Course in 8 Hours [2020]",
    views: "조회수 95만회",
    timestamp: "9개월 전",
    channelImage:
      "https://yt3.ggpht.com/a-/AOh14GhOUP_9re93yOMdN4RLQLHl6Mbk6vmUS1524w=s68-c-k-c0x00ffffff-no-rj-mo",
    channel: "Clever Programmer",
    iamge:
      "https://i.ytimg.com/vi/Qqx_wzMmFeA/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLC4E7lNmU8F0kwZ520ia5N7KsWbhg",
  },
];

function RecommendedVideos() {
  return (
    <RecommendedVideosWrap>
      <div className="recommendedVideos">
        <h2>Recommended</h2>
        <div className="recommendedVideos__videos">
          {VideoInfos.map(
            ({ title, views, timestamp, channelImage, channel, iamge }) => (
              <VideoCard
                key={title}
                title={title}
                views={views}
                timestamp={timestamp}
                channelImage={channelImage}
                channel={channel}
                iamge={iamge}
              />
            )
          )}
        </div>
      </div>
    </RecommendedVideosWrap>
  );
}

export default RecommendedVideos;
