import React, { Component } from 'react'
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {date: new Date()}
    this.list = [
      {name: 'a'},
      {name: 'b'}
    ]
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        date: new Date()
      })
    }, 50)
  }
  render () {
    let list = this.list.map(item =>
      <div>{item.name}</div>
    )
    return (<div>{list}</div>)
  }
}