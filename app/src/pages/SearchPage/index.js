import axios from "../../api/axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import "./SearchPage.css";
import { useDebounce } from "../../hooks/useDebounce";

export default function SearchPage(setSearchValue) {
  const navigate = useNavigate();
  const [searchResult, setSearchResult] = useState([]);

  // 검색창에 입력한 값 가져오기
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let query = useQuery();
  // const searchTerm = query.get("q");
  const debouncedSearchTerm = useDebounce(query.get("q"), 500);

  // 검색할 때 영화 데이터 가져옴
  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  const fetchSearchMovie = async (debouncedSearchTerm) => {
    console.log("searchTerm", debouncedSearchTerm);
    try {
      const request = await axios.get(
        `/search/multi?include_adult=false&query=${debouncedSearchTerm}`
      );
      setSearchResult(request.data.results);
    } catch (error) {
      console.log("error", error);
    }
    console.log("searchResult", searchResult);
  };

  // 검색한 데이터가 있을 때
  const renderSearchResult = () => {
    return searchResult.length > 0 ? (
      <section className="search_container">
        {searchResult.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== "person") {
            const movieImgUrl =
              "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
            return (
              <div className="movie" key={movie.id}>
                <img
                  src={movieImgUrl}
                  alt="movie"
                  className="movie_poster"
                  onClick={() => {
                    navigate(`/${movie.id}`);
                    // setSearchValue("");
                  }}
                />
              </div>
            );
          }
        })}
      </section>
    ) : (
      // 검색한 데이터가 없을 때
      <section className="search_container">
        <div className="no_result">
          <p>
            입력하신 검색어 '{debouncedSearchTerm}'(와)과 일치하는 결과가
            없습니다.
          </p>
          <div className="recommend_search">
            <p>추천 검색어:</p>
            <ul>
              <li>다른 키워드를 입력해 보세요.</li>
              <li>시리즈나 영화를 찾고 있으신가요?</li>
              <li>
                영화 제목, 시리즈 제목, 또는 배우나 감독의 이름으로 검색해
                보세요.
              </li>
              <li>
                코미디, 로맨스, 스포츠 또는 드라마와 같은 장르명으로 검색해
                보세요.
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };

  return renderSearchResult();
}
