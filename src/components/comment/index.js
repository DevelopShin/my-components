import SignleComment from "./SingleComment";
import { TextArea, Button, WriteContainer } from "./CommentElements";
import { Wrapper, CommentBoard } from "./UseExElements";
import React, { useState } from 'react'
// import ReplyBoard from "./ReplyBoard";
// import { Replaycontainer } from "./CommentElements";
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
  }

  return (
    <Wrapper id='contaniner'>
      <CommentBoard id='board'>

        <WriteContainer>
          <TextArea rows={6} name="textarea" value={comment} onChange={onChangeComment} />
          <Button onClick={onSubmitComment}>Submit</Button>
        </WriteContainer>
        <p>{comment}</p>
        <br />
        <hr />
        <WriteContainer>
          {commentList && commentList.map((newcomment, index) => (
            <React.Fragment key={index} >
              {console.log(commentList.length)}
              <SignleComment
                comment={newcomment}
              />

            </React.Fragment>
          ))}
        </WriteContainer>

      </CommentBoard>
    </Wrapper>
  )
}

export default MainComment
