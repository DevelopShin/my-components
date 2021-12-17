import styled from "styled-components";


export const CommentBy = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    margin: 0.5rem 0.2rem 0;
    // margin-left: 20px;
`

export const Avatar = styled.img`

    margin-right: 10px;
    width:35px;
    height:35px;
    border-radius:75%;
`

export const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;

`
export const CommentInfo = styled.div`
    display: flex;
    margin-top: 2px;
    margin-bottom: 10px;
    align-items:start;
    justify-content:start;
`

export const VerticalBox = styled.div`
    display: flex;
    margin-top: 5px;
    align-items:center;
`

export const AvataName = styled.p`
    text-weight: bold;
    font-size: 12px;
    margin-right: 5px;
`
export const LavelText = styled.p`
    display:flex;
    color: rgba(0,0,0,0.5);
    font-size: 12px;
    margin-right:8px;
    align-items:center
`
export const Contents = styled.p`
    margin-right:5px;
    font-size: 16px;
    font-weight: 300;
    color:#222
`



// Textarea

export const WriteContainer = styled.div`
  display:flex;
  flex-direction:column;
  max-width:100%;
`

export const Button =styled.button`
  height: 30px;
  width:70px;
  // border-radius: 10px;
  background: #fff;
  box-shadow: 0 0 0 0.2rem rgba(186, 104, 200, .2);

  border: 1px solid #ba68c8
`

export const TextArea = styled.textarea`
    border: 1px solid #ba68c8;
    border-radius: 2px;
    box-shadow: 0 0 0 0.2rem rgba(186, 104, 200, .2);
    width: 100%;
    margin-top: 10px;
    padding: 5px;
    margin-bottom:2px;
`


export const ReplyWrap = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    // margin: 1rem auto 0.4rem 40px;
    // margin-left: 20px;
`
export const Replaycontainer= styled.div`
  background:rgba(0,0,0,0.03);
  margin-left:10px;
  padding: 25px 10px 10px 30px;
`