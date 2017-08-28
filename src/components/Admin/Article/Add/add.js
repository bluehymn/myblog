import React, { Component } from 'react'
import axios from 'axios'

class AddArticle extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <input id="file" type="file"/>
        <button onClick={this.submit}>提交</button>
      </div>
    )
  }

  submit () {
    let formdata = new FormData()
    formdata.append('file', document.getElementById('file').files[0])
    axios.request({
      method: 'post',
      url: '/api/upload',
      data: formdata
    }).then(data => {
      
    })
  }

}

export default AddArticle
