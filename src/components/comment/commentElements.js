import styled from "styled-components";


export const CommentBy = styled.div`
    position: relative;
    display: flex;
    justify-content: start;
    margin: 0.5rem 0.2rem 0;
    // margin-left: 20px;
`
export const Avatar = styled.img`
    // display: block;
    // margin: 0 auto;
    // margin-right:
    width:35px;
    height:35px;
    border-radius:30%;
`

export const CommentContent = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
`
export const Horizontal = styled.div`
    display: flex;
    // margin:10px 5px 0;
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
    margin-top:5px;
    margin-bottom:5px;
    font-size: 14px;
    font-weight: 300;
`

export const Icon = styled.div`
    height: 10px;
    margin: 0 5px 0 5px
    `



// Textarea

export const WriteContainer = styled.div`
  display:flex;
  flex-direction:column;
  max-height:180px;
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