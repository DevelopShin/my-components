import CommentForm from "./CommentForm";
import { TextArea, Button, WriteContainer } from "./CommentElements";
import { Wrapper, CommentBoard } from "./UseExElements";
import React, { useState } from 'react'
import ReplyBoard from "./ReplyBoard";
import { Replaycontainer } from "./CommentElements";
import react from "react";
function SignleComment(props) {

  const [OnReply, setOnReply] = useState(false)
  const OnReplyHandler = () => {
    setOnReply(!OnReply)
  }

  const [ReplycommentList, setReplycommentList] = useState([])
  const [Replycomment, setReplycomment] = useState('')
  const onChangeReplyComment = (e) => {
    setReplycomment(e.target.value)
  }
  const onSubmitReplyComment = (e) => {
    e.preventDefault()
    setReplycommentList([...ReplycommentList, Replycomment])
    setReplycomment('')
  }

  return (
 
      // <CommentBoard id='board'>
      <div>
            <CommentForm OnReplyHandler={OnReplyHandler} 
              comment={props.comment}
            />

        {/* Reply comments */}
            {OnReply &&
                <WriteContainer >
                  <TextArea rows={3} name="Replycomment" value={Replycomment} onChange={onChangeReplyComment} />
                  <Button type="htmlSubmit" onClick={onSubmitReplyComment}>Submit</Button>
                </WriteContainer >
            } 
          </div>

  )
}

export default SignleComment
