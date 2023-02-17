import React from "react";
import styled from "styled-components";

const HeroComponent = () => {
  const Wrapper = styled.div`
    height: 350px;
    background-color: ${({ theme }) => theme.colors.primaryBg};
    .img {
      height: 350px;
      width: 400px;
    }
    display: flex;
    .title {
      flex-grow: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      h1 {
        flex-grow: 1;
        font-size: 180px;
        color: ${({ theme }) => theme.colors.primaryText};
      }
    }
  `;
  return (
    <Wrapper>
      <img className="img" src="PopCorn.gif" />
      <div className="title">
        <h1>FilmHunt</h1>
      </div>
    </Wrapper>
  );
};
export default HeroComponent;
