import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      console.log(`previous value ${prevState.count}`)
      return {
        count: prevState.count + 1,
      }
    })
  }

  render() {
    const {count} = this.state

    return (
      <div className="container">
        <div>
          <h1 className="title">
            The Button has been clicked <span className="count">{count} </span>
            times
          </h1>
          <p className="description">Click the button to increase the count</p>
          <button className="button" onClick={this.onIncrement}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
