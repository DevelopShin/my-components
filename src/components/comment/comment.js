import React,{useState} from 'react'
import image from '../../images/svg-1.svg'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {
   Container
   ,CommentWrap
  ,CommentBy
  ,Avatar
  ,CommentContent
  ,Horizontal,
  AvataName,
  LavelText,
  Contents
 } from './commentElements'

const SignleComment=(props)=> {
  const [Like, setLike] = useState(0)
  const [DisLike, setDisLike] = useState(0)

  const likeHander = () => {
    if(!Like) {
      setLike(1)
      setDisLike(0)
    }
  }

  const dislikeHander = () => {
    if(!DisLike) {
      setLike(0)
      setDisLike(1)
    }
  }

  return (
    <>
          <CommentBy>
            <Avatar src={image}/>
            <CommentContent>
              <Horizontal>
                <AvataName>shinhyeok</AvataName>
                <LavelText>20-12-01</LavelText>
              </Horizontal>
              <Contents>
                sdddddddssdsdsssss
                sdddddddssdsdsssss
                </Contents>
                <Horizontal>
                <LavelText onClick={props.OnReplyHandler} style={{cursor:'default'}}>Reply</LavelText>
                <LavelText><AiOutlineLike onClick={likeHander}/>{Like}</LavelText>    {/* like*/}
                <LavelText><AiOutlineLike onClick={dislikeHander}/>{DisLike}</LavelText>    {/* dislike*/}
                </Horizontal>

            </CommentContent>
          </CommentBy>
    </>
  )
}
export default SignleComment
