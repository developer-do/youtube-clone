import React from "react";
import { TuneOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { ChannelRow, VideoRow } from "./";

const SearchPageWrap = styled.div`
  flex: 0.8;
  background-color: #f9f9f9;
  padding: 20px 20px;

  .searchPage {
    &__filter {
      display: flex;
      align-items: center;
      color: #606060;
      font-size: xx-small !important;

      h2 {
        margin-left: 10px;
      }
    }
  }

  hr {
    height: 1px;
    border: 0;
    background-color: lightgray;
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

const ChannelRowData = {
  image:
    "//yt3.ggpht.com/a/AATXAJyRz2oxQsoFrPtHj8qpiWKXDBzFB4wuxEa8k1gB=s176-c-k-c0x00ffffff-no-rj-mo",
  channel: "피지컬갤러리",
  verified: "verified",
  subs: "구독자 247만명",
  noOfiVideos: "동영상 510개",
  description:
    "재밌고 유익한 체형교정과 재활 정보를 알려주는 빡빡이 아저씨 를 볼 수 있는 채널. 제공되는 정보들은 의학적 진단, 진료 혹은 치료를 ...",
};

const VideoRowData = [
  {
    views: "조회수 223만회",
    subs: "구독자 247만명",
    description: "가짜사나이 2기를 모집합니다. 지원 링크 ...",
    timestamp: "2일 전",
    channel: "피지컬갤러리",
    title: "가짜사나이 2기를 모집합니다.",
    image:
      "https://i.ytimg.com/vi/0FvzSF8sFeE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDRj_6d2JiyOcvlYzNu5bZnEc0LZQ",
  },
  {
    views: "조회수 64만회",
    subs: "구독자 247만명",
    description:
      "이제승 관장님께 애니멀플로우를 배워보았습니다 #바디컨트롤 #이제승 #애니멀플로우 #기능성운동 #심으뜸 #맨몸운동.",
    timestamp: "4일 전",
    channel: "피지컬갤러리",
    title: "저의 스승님이십니다│걸어서 쇠계속으로",
    image:
      "https://i.ytimg.com/vi/rbujTvj1dNo/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCRsAI5so2LjGIDfn4OE8l2DvbTdQ",
  },
  {
    views: "조회수 219만회",
    subs: "구독자 247만명",
    description:
      "미션파서블 채널의 H교관님의 몸을 봐드렸습니다. #에이전트H #구해줘몸즈 #문교훈 #문쌤재활 #미션파서블.",
    timestamp: "6일 전",
    channel: "피지컬갤러리",
    title: "H 교관님 몸이.. ㄷㄷ l 구해줘 몸즈 에이전트 H",
    image:
      "https://i.ytimg.com/vi/9iZ6T0D9pa8/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAvs9xW9rB3cYYZpVnh-aZPYZEQXg",
  },
  {
    views: "조회수 321만회",
    subs: "구독자 247만명",
    description:
      "미션파서블 채널의 H교관님의 몸을 봐드렸습니다. #에이전트H #구해줘몸즈 #문교훈 #문쌤재활 #미션파서블.",
    timestamp: "1주 전",
    channel: "피지컬갤러리",
    title: "가짜사나이 스페셜",
    image:
      "https://i.ytimg.com/vi/1kdB85QsUBY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBNFyousF3dx524CeY62GkW7NWZ8g",
  },
  {
    views: "조회수 172만회",
    subs: "구독자 247만명",
    description: "씨스타 #소유 #3대측정 씨스타 소유의 3대 중량은 몇일까?",
    timestamp: "1주 전",
    channel: "피지컬갤러리",
    title: "운동중독 여자 아이돌.. 3대 중량은?",
    image:
      "https://i.ytimg.com/vi/w-eWKu2flxI/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBWDtsGX0-UESKKsN_XRrCHWUbCPw",
  },
  {
    views: "조회수 317만회",
    subs: "구독자 247만명",
    description:
      "가짜사나이 진짜가 되기 위한 가짜들의 이야기 가짜사나이! 가짜사나이 교관님들의 이야기. 교관들의 수다! 캐릭터 팬아트 원본 ...",
    timestamp: "2주 전",
    channel: "피지컬갤러리",
    title: "가짜사나이 비하인드 스토리 - 교관들의 수다 -",
    image:
      "https://i.ytimg.com/vi/KkGQSZogV38/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCnrl3k0qk55aHBuGeAiHjJqFWCOg",
  },
  {
    views: "조회수 409만회",
    subs: "구독자 247만명",
    description:
      "가짜사나이 진짜가 되기 위한 가짜들의 이야기 수위가 너무 쎄서 많은 부분들이 생략되었습니다. 제작지원 : #셀렉스스포츠 #매일유업 ...",
    timestamp: "2주 전",
    channel: "피지컬갤러리",
    title: "그들의 마지막 이야기 l 가짜사나이 Ep7",
    image:
      "https://i.ytimg.com/vi/Kb3ryVickFY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAhjk5Pg8sorwMv2UF3XQZTKMyCYw",
  },
  {
    views: "조회수 202만회",
    subs: "구독자 247만명",
    description:
      "구해줘몸즈 #씨스타 #소유 당신의 몸을 구해드립니다. 출장 PT 서비스 구해줘 몸즈 그 첫 번째 주인공 씨스타 소유!",
    timestamp: "2주 전",
    channel: "피지컬갤러리",
    title: "씨스타 소유..ㅎ",
    image:
      "https://i.ytimg.com/vi/vAfAeMbfyew/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBIe7ui77SShiKHkSu29OFt-_8wRg",
  },
  {
    views: "조회수 394만회",
    subs: "구독자 247만명",
    description:
      "가짜사나이 진짜가 되기 위한 가짜들의 이야기 수위가 너무 쎄서 많은 부분들이 생략되었습니다. 제작지원 : #셀렉스스포츠 #매일유업 ...",
    timestamp: "3주 전",
    channel: "피지컬갤러리",
    title: "사상자 발생. 이성을 잃어가는 인간들 l 가짜사나이 Ep6",
    image:
      "https://i.ytimg.com/vi/aYh-0FyEtAA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDYvTLEprKlA4AYWWwvE4Qh9orXLQ",
  },
  {
    views: "조회수 421만회",
    subs: "구독자 247만명",
    description:
      "가짜사나이 진짜가 되기 위한 가짜들의 이야기 수위가 너무 쎄서 많은 부분들이 생략되었습니다. 제작지원 : #셀렉스스포츠 #매일유업 ...",
    timestamp: "3주 전",
    channel: "피지컬갤러리",
    title: "뭐 이딴 XX들이 왔어?  l 가짜사나이 Ep5",
    image:
      "https://i.ytimg.com/vi/n_4t1pb8X-o/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLChQHAjtiZcLaGtYwfy1VGV_Py9zA",
  },
];

function SearchPage() {
  return (
    <SearchPageWrap>
      <div className="searchPage">
        <div className="searchPage__filter">
          <TuneOutlined />
          <h2>FILTER</h2>
        </div>
        <hr />

        <ChannelRow ChannelRowData={ChannelRowData} />
        <hr />

        {VideoRowData.map(
          ({ views, subs, description, timestamp, channel, title, image }) => (
            <VideoRow
              views={views}
              subs={subs}
              description={description}
              timestamp={timestamp}
              channel={channel}
              title={title}
              image={image}
            />
          )
        )}
      </div>
    </SearchPageWrap>
  );
}

export default SearchPage;
