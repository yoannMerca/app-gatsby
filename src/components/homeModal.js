import React from "react"
import Image from "../generic-component/image"
import MyButton from "../generic-component/myButton"

const HomeModal = () => {
  return (
    <div className={"home-modal"}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className={"d-inline-f"}>
        <Image />
        <div className={"d-flex"}>
          <h2>Hello team</h2>
          <MyButton text={"Enter"} variant={"outlined"} color={"primary"} />
        </div>
      </div>
    </div>
  )
}
export default HomeModal
