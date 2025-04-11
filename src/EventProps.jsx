import React from 'react'

export const EventProps = () => {

    const wowEvent =()=>{
        console.log("hello everyone")
    }
    const handleHover=()=>{
        alert("hahahha")
    }
  return (
    <>
      <EveryState onClick={()=>wowEvent()} onMouseEnter={handleHover}
        />
    </>
  )
}

export const EveryState=(props)=>{
    return(
        <>
        <button onClick={props.onClick}>Button1</button>
        <br/>
        <button onMouseEnter={props.onMouseEnter}>button2</button>
        </>
    )
}

