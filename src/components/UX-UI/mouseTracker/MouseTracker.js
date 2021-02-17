import React, { useEffect, useState } from "react"

import "./style/style.css"

const MouseTracker = () => {
  const INITIAL_STATE = {
    offsetX: 0,
    offsetY: 0,
    friction: 1 / 32,
  }

  const [state, setState] = useState(INITIAL_STATE)

  useEffect(() => {
    const _mouseMove = (e) => {
      let followX = window.innerWidth / 2 - e.clientX
      let followY = window.innerHeight / 2 - e.clientY
      let x = 0,
        y = 0
      x += (-followX - x) * state.friction
      y += (followY - y) * state.friction
      setState((prevState) => {
        return { ...prevState, offsetX: x, offsetY: y }
      })
    }

    document.addEventListener("mousemove", _mouseMove)

    return () => {
      document.removeEventListener("mousemove", _mouseMove)
    }
  }, [state])

  let offset = {
    transform: `translate(-50%, -50%) perspective(600px)
                rotateY(${state.offsetX}deg)
                rotateX(${state.offsetY}deg)`,
  }

  return (
    <div className='wrapper' style={offset}>
      <div className='shape' />
      <div className='shape2'>{/* <p>Le diable au cadran</p> */}</div>
    </div>
  )
}

export default MouseTracker

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.init()
//   }
//   init() {
//     this.state = {
//       offsetX: "",
//       offsetY: "",
//       friction: 1 / 32
//     }
//     this._mouseMove = this._mouseMove.bind(this)
//   }
//   componentDidMount() {
//     document.addEventListener("mousemove", this._mouseMove)
//   }
//   componentWillUnmount() {
//     document.removeEventListener("mousemove", this._mouseMove)
//   }
//   _mouseMove(e) {
//     let followX = window.innerWidth / 2 - e.clientX
//     let followY = window.innerHeight / 2 - e.clientY

//     let x = 0,
//       y = 0
//     x += (-followX - x) * this.state.friction
//     y += (followY - y) * this.state.friction
//     this.setState({
//       offsetX: x,
//       offsetY: y
//     })
//   }
//   render() {
//     let offset = {
//       transform: `translate(-50%, -50%) perspective(600px)
//                   rotateY(${this.state.offsetX}deg)
//                   rotateX(${this.state.offsetY}deg)`
//     }

//     return (
//       <div className='wrapper' style={offset}>
//         <div className='shape'></div>
//         <div className='shape2'></div>
//         <p>Move your mouse or finger around</p>
//       </div>
//     )
//   }
// }
// ReactDOM.render(<App />, document.getElementById("app"))
