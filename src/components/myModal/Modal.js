import React, { useState, useRef, useEffect, useCallback } from 'react'
import { useSpring, animated } from 'react-spring'
import { Button } from './indexElements'
import { Background, ModalWrap, ModalImg, ModalContent, CloseModalBtn } from './ModalElements'
import dogImg from './modal.jpg'

export const Modal = (props) => {
  const [showModal, setshowModal] = useState(false)

  const openModal = (params) => {
    setshowModal(!showModal)
  }

  const animation = useSpring({
    config: { duration: 250 },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  })

  const modalRef = useRef()
  const closeModal = (e) => {
    if(modalRef.current === e.target){setshowModal(false)}
  }
  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      {showModal ?
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation} >
            <ModalWrap showModal={showModal}>
              <ModalImg src={dogImg} alt='camera' />
              <ModalContent>
                <h1>{props.title}</h1>
                <p>{props.text}</p>
                <button>Join Now</button>
              </ModalContent>
              <CloseModalBtn
                aria-label='Close modal'
                onClick={openModal} />
            </ModalWrap>
          </animated.div>
        </Background>
        : null}

    </>
  )
}

