import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  background-color: rgba(0,0,0,0.5);
  padding:0;
  justify-content: center;
  width: 100%;
  height: 100%;
  // margin: 0 auto;
  min-height: 1350px;
  overflow:hidden
`

export const CommentBoard = styled.div`
    display: flex;
    justify-content: start;
    flex-direction: column;
    width: 100%;
    // height:100%;
    background-color: #fff;
    max-width: 1100px;
    align-items:start
    margin: 25px 50px;
    padding: 25px 50px;


    // @media screen and (max-width: 768px){
    //   // margin: 5px;
    //   // padding:10px;
    // }
  `