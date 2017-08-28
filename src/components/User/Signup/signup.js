import React, { Component } from 'react'
import {JSEncrypt as Crypt} from 'jsencrypt'
import {pubKey} from '../../../utility/config'
import axios from 'axios'

class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      pwd: ''
    }
    this.nameChange = this.nameChange.bind(this)
    this.pwdChange = this.pwdChange.bind(this)
    this.submit = this.submit.bind(this)
  }

  componentDidMount() {
    
  }

  nameChange (event) {
    let name = event.target.value
    this.setState({
      name: name
    })
  }

  pwdChange (event) {
    let pwd = event.target.value
    this.setState({
      pwd: pwd
    })
  }

  submit () {
    let name = this.state.name
    let pwd = this.state.pwd
    let crypt = new Crypt()
    crypt.setPublicKey(pubKey)
    let salt = Math.random(new Date().getTime())
    pwd = crypt.encrypt(pwd + ' ' + salt)

    let data = {
      name: this.state.name,
      pwd: pwd
    }

    axios.post('/api/user', data)
    .then(function (response){
      console.log(response)
    })

  }

  render () {
    return (
      <div>
        <div><input value={this.state.name} onChange={this.nameChange}/></div>
        <div><input value={this.state.pwd} onChange={this.pwdChange} /></div>
        <button onClick={this.submit}>Signup</button>
      </div>
    )
  }
}

export default Register
