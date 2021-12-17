import React, { useState } from 'react'
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import {ReplyWrap, Avatar, CommentContent, VerticalBox, AvataName, LavelText, Contents,CommentInfo} from './CommentElements'

const ReplyBoard = (props) => {
  const [Like, setLike] = useState(0)
  const [DisLike, setDisLike] = useState(0)

  const likeHander = () => {
    if (!Like) {
      setLike(1)
      setDisLike(0)
    }
  }

  const dislikeHander = () => {
    if (!DisLike) {
      setLike(0)
      setDisLike(1)
    }
  }

  return (
    <>
      <ReplyWrap>
        <CommentContent>
          <CommentInfo>
            <Avatar src={'https://picsum.photos/id/875/400/400'} />
            <div style={{alignItems:'center', margin:'auto 0'}}>
              <AvataName>Hobit Jang</AvataName>
              <LavelText>20-12-01</LavelText>
            </div>
          </CommentInfo>

          <Contents>
                {props.comment}
          </Contents>
          <VerticalBox>
            <LavelText onClick={props.OnReplyHandler} style={{ cursor: 'default' }}>Reply</LavelText>

            <LavelText><AiOutlineLike onClick={likeHander} />{Like}</LavelText>    {/* like*/}
            <LavelText><AiOutlineLike onClick={dislikeHander} />{DisLike}</LavelText>    {/* dislike*/}
          </VerticalBox>

        </CommentContent>
      </ReplyWrap>
    </>
  )
}
export default ReplyBoard