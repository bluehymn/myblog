import React, { Component } from 'react'
import {JSEncrypt as Crypt} from 'jsencrypt'
import {pubKey} from '../../../utility/config'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {saveToken} from '../../../utility/auth'

class Login extends Component {
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

    axios.post('/api/user/login', data)
    .then(function (response){
      let data = response.data
      saveToken(data.token)
    })

  }

  render () {
    return (
      <div>
        <div><input value={this.state.name} onChange={this.nameChange}/></div>
        <div><input value={this.state.pwd} onChange={this.pwdChange} /></div>
        <button onClick={this.submit}>Login</button>
        <Link to="/signup">Signup</Link>
      </div>
    )
  }
}

export default Login