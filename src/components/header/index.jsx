import React from "react";
import styled from "styled-components";
import { addToWishlist } from "../../redux/action";
import { useDispatch } from "react-redux";
import { BsHeartFill } from "react-icons/bs";
const HeaderComponent = () => {
  let redThemeColor = "#d5274c";
  const Header = styled.div`
    height: 50px;
    background-color: ${redThemeColor};
    padding-top: 10px;
    display: flex;
    justify-content: end;
    .btn {
      background-color: transparent;
      border: 0px;
      cursor: pointer;
      &:hover {
        transform: translate(-2px);
      }
      .heart {
        height: 35px;
        width: 45px;
        color: ${(props) => props.heartColor};
      }
    }
  `;
  const dispatch = useDispatch();
  const movie = {
    name: "Titanic",
    ReleaseDate: "13 March 1998",
  };
  return (
    <Header className="header" heartColor="white">
      <button className="btn" onClick={() => dispatch(addToWishlist(movie))}>
        <BsHeartFill className="heart" />
      </button>
    </Header>
  );
};
export default HeaderComponent;
