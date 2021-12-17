import CommentForm from "./CommentForm";
import { TextArea, Button, WriteContainer } from "./CommentElements";
import React, { useState } from 'react'

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
    console.log(Replycomment)
    e.preventDefault()
    setReplycommentList([...ReplycommentList, Replycomment])
    setReplycomment('')
  }

  return (
 
      <>
            <CommentForm 
              OnReplyHandler={OnReplyHandler} 
              comment={props.comment}
            />

        {/* Reply comments */}
            {OnReply &&
                <WriteContainer style = {{marginLeft: '20px'}}>
                  <TextArea rows={3} name="Replycomment" value={Replycomment} onChange={onChangeReplyComment} />
                  <Button type="htmlSubmit" onClick={onSubmitReplyComment}>Submit</Button>
                </WriteContainer >
            } 
      </>

  )
}

export default SignleComment
