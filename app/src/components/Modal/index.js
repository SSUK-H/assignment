import React, { useRef } from "react";
import "./Modal.css";
import useOnClickOutside from "../../hooks/useOnClickOutside";

const Modal = ({
  backdrop_path,
  title,
  overview,
  name,
  release_date,
  first_air_date,
  vote_average,
  setModalOpen,
}) => {
  // 특정 dom 선택
  const ref = useRef();
  // 모달 외부 클릭 시 닫음
  useOnClickOutside(ref, () => {
    setModalOpen(false);
  });

  return (
    <div className="modal_wrap">
      <div className="modal" ref={ref}>
        <div className="modal_banner">
          <img
            className="modal_poster"
            src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
            alt="modal_poster"
          />
          <h2 className="modal_title">{title ? title : name}</h2>
          <div className="modal_fadeBottom"></div>
        </div>

        <div className="modal_content">
          <p className="modal_details">
            <span className="modal_user_perc">100% 일치</span>{" "}
            {release_date ? release_date : first_air_date}
          </p>

          <p className="modal_average"> 평점: {vote_average}</p>
          <p className="modal_overview"> {overview}</p>
        </div>

        <span className="modal_close" onClick={() => setModalOpen(false)}>
          x
        </span>
      </div>
    </div>
  );
};

export default Modal;
