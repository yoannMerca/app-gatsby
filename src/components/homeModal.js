import React, { useEffect, useState } from "react"
import Image from "../generic-component/image"
import MyButton from "../generic-component/myButton"

const HomeModal = () => {
  const [textH1, setTextH1] = useState("")
  const h1 = "Bienvenue sur mon site!!!"

  useEffect(() => {
    write()
  }, [])
  function write() {
    if (textH1.length < h1.length) {
      setTextH1(textH1 + h1[textH1.length])
    } else {
      setTextH1("")
    }
  }

  useEffect(() => {
    setTimeout(() => write(), 100 * Math.floor(Math.random() * Math.floor(9))) // This
  }, [textH1])

  return (
    <div className={"home-modal-border"}>
      <div className={"home-modal"}>
        <div className={"header"}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <h1>{textH1}</h1>
        <div className={""}>
          <Image />
        </div>
      </div>
    </div>
  )
}
export default HomeModal
