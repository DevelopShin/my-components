import SignleComment from "./comment";
import { TextArea, Button, WriteContainer } from "./commentElements";
import { Wrapper, CommentBoard } from "./useExElements";
import React,{useState} from 'react'

function MainComment() {

  const [OnReply, setOnReply] = useState(false)
  const OnReplyHandler = () => {
    setOnReply(!OnReply)
  }

  return (

    <Wrapper id='contaniner'>
      <CommentBoard id='board'>

        <WriteContainer>
          <TextArea rows={6} />
          <Button >Submit</Button>
        </WriteContainer>

        <SignleComment data OnReplyHandler={OnReplyHandler}/>

        {OnReply && <WriteContainer style = {{marginLeft:"48px"}}>
          <TextArea rows={4} cols={20}/>
          <Button >Submit</Button>
        </WriteContainer >
        }


      </CommentBoard>
    </Wrapper>
  )
}

export default MainComment
