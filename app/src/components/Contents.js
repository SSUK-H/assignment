import axios from "../api/axios";
import React, { useEffect, useState } from "react";
import "./Contents.css";
import { styled } from "styled-components";
import Modal from "./Modal";

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function Contents({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setmovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, []);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    console.log("contents request", request);
    setMovies(request.data.results);
  };

  // 영화 모달
  const handleClick = (movie) => {
    setModalOpen(true);
    setmovieSelected(movie);
  };

  return (
    <Content>
      <h2 className="text-lg pt-6">{title}</h2>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={5}
        breakpoints={{
          1378: {
            slidesPerView: 6, // 한번에 보이는 슬라이드 개수
            slidesPerGroup: 6, // 몇개씩 슬라이드 할지
          },
          998: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          625: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          0: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}
      >
        <div id={id} className="row_posters">
          {movies.map((movie) => (
            <SwiperSlide>
              <img
                key={movie.id}
                style={{ padding: "10px 0", cursor: "pointer" }}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`https://image.tmdb.org/t/p/original/${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                } `}
                alt={movie.name}
                onClick={() => handleClick(movie)}
              />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && <Modal {...movieSelected} setModalOpen={setModalOpen} />}
    </Content>
  );
}

const Content = styled.section`
  width: 96% !important;
  margin-left: 4%;
`;
