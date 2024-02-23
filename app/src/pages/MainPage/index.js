import React from "react";
import requests from "../../api/requests";
import Banner from "../../components/Banner";
import Contents from "../../components/Contents";

export default function MainPage() {
  return (
    <div>
      <Banner />
      <Contents
        title="넷플릭스 오리지널"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Contents
        title="요즘 뜨는 콘텐츠"
        id="TN"
        fetchUrl={requests.fetchTrending}
      />
      <Contents
        title="액션 영화"
        id="AM"
        fetchUrl={requests.fetchActionMovies}
      />
      <Contents
        title="코미디 영화"
        id="CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      <Contents
        title="히어로 영화"
        id="HM"
        fetchUrl={requests.fetchHorrorMovies}
      />
    </div>
  );
}
