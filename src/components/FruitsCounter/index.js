// ... (your imports and other code)
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count1: 0}

  onMango = () => {
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.count}`)
      return {count: prevState.count + 1}
    })
  }

  onBanana = () => {
    this.setState(prevState => {
      console.log(`Previous state value ${prevState.count}`)
      return {count1: prevState.count1 + 1}
    })
  }

  render() {
    const {count, count1} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">
            Bob ate {count} mangoes {count1} bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="img-1"
              alt="mango"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="img-1"
              alt="banana"
            />
            <div>
              <button type="button" className="button" onClick={this.onMango}>
                Eat Mango
              </button>
              <button type="button" className="button" onClick={this.onBanana}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
