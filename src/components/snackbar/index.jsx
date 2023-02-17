import React, { useImperativeHandle, useRef, useState } from "react";
import styled from "styled-components";
const Snackbar = React.forwardRef((props, ref) => {
  const childSnackBarRef = useRef(null);
  const textRef = useRef(null);
  useImperativeHandle(ref, () => ({
    handleSnackBar: () => {
      childSnackBarRef.current.style.display = "flex";
      textRef.current.textContent = "Movie Added To Wishlist";
    },
  }));

  //   useEffect(() => {
  //     handleSnackBar();
  //   }, []);
  //;
  //   const handleSnackBar = () => {
  //     snackBarRef.current.style.display = "flex";
  //   };
  const Box = styled.div`
    background-color: transparent;
    //border: 5px solid;
    padding: 5px;
    height: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    .wrapperDiv {
      display: none;
      position: relative;
      width: 500px;
      height: 100px;
      padding-bottom: 70px;
      .snackTextDiv {
        position: absolute;
        top: 0;
        margin-left: 90px;
        width: 500px;
        height: 100px;
        background-color: transparent;
        display: flex;
        align-items: center;
        .label {
          width: 500px;
          height: 50px;
          background-color: ${({ theme }) => theme.colors.primaryBg};
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          h3 {
            color: ${({ theme }) => theme.colors.primaryText};
          }
        }
      }
      .pictureDiv {
        position: absolute;
        top: 0;
        left: 0;
        margin-left: 50px;
        width: 100px;
        height: 100px;
        background-color: transparent;
        .img {
          width: 100px;
          height: 100px;
        }
      }
    }
  `;
  return (
    <Box>
      <div className="wrapperDiv" ref={childSnackBarRef}>
        <div className="snackTextDiv">
          <div className="label">
            <h3 ref={textRef}></h3>
          </div>
        </div>
        <div className="pictureDiv">
          <img className="img" src="snackbar.png" />
        </div>
      </div>
      {/* <div className="wrapperDiv">
        <div className="snackTextDiv">
          <div className="label">
            <h3>{snackBarMsg}</h3>
          </div>
        </div>
        <div className="pictureDiv">
          <img className="img" src="snackbar.png" />
        </div>
      </div> */}
    </Box>
  );
});
export default Snackbar;
