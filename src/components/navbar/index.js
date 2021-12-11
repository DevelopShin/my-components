import MobileBar from "./commons/MobileBar";
import Nav from "./commons/Nav";

import React,{useState, useEffect} from 'react'

function NavBar(props) {

  // useEffect(() => {
  //   window.addEventListener()
  // }, [])
  const [isOpen, setisOpen] = useState(false);
  const togle = () => {
      setisOpen(!isOpen)
  }

  return (
    <>
      
      <Nav smoothBox={props.smoothBox} togle={togle} setisOpen={setisOpen} isOpen={isOpen}/>
      <MobileBar 
      isOpen={isOpen}
      togle={togle}
      />
    </>
  )
}

export default NavBar
