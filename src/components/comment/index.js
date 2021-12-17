import SignleComment from "./SingleComment";
import { TextArea, Button, WriteContainer,Replaycontainer } from "./CommentElements";
import { Wrapper, CommentBoard } from "./UseExElements";
import React, { useState } from 'react'
import ReplyBoard from "./ReplyBoard";
import react from "react";

function MainComment() {

  const [commentList, setcommentList] = useState(["cjt", "enf"])

  const [comment, setcomment] = useState('')
  const onChangeComment = (e) => {
    setcomment(e.target.value)
  }
  const onSubmitComment = (e) => {
    e.preventDefault()
    setcommentList([...commentList, comment])
    setcomment('')
    console.log(commentList.length)

  }

  return (
    <Wrapper id='contaniner'>
      <CommentBoard id='board'>
        <div style={{ marginBottom: "10px", paddingBottom: "10px", borderBottom: "solid 2px rgba(0,0,0,0.06" }}>
          <WriteContainer>
            <TextArea rows={6} name="textarea" value={comment} onChange={onChangeComment} />
            <Button onClick={onSubmitComment}>Submit</Button>
          </WriteContainer>
        </div>


        <>
          {commentList && commentList.map((newcomment, index) => (
            <React.Fragment key={index} >
              <SignleComment
                comment={newcomment}
              />

              <ReplyBoard comment={commentList} > 

              </ReplyBoard>

            </React.Fragment>
          ))}
        </>

      </CommentBoard>
    </Wrapper>
  )
}

export default MainComment
