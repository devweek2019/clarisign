import React from 'react'
import collinCss from './collin.css'
// const Iframe = require('react-iframe')
const iframe = require('iframe')
const axios = require('axios')
// let result = 'hellooo'
// frame = iframe({ container: document.querySelector('#container') , body: "hi" })

class Collin extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            url: ''
        }
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'http://localhost:3000/',
            data: {
              "email": "john@email.com",
              "name": "John Doe",
              "recipientId": "1",
              "clientUserId": "1234"
            }
          }).then((res) => {
            console.log(typeof res.data)
            console.log(res.data);
            this.setState({
                url: res.data
            })
          })
    }

    render() {
        // const {url} = this.state
        return (
            <div className={collinCss.top_cont}>
      <p className="description">This page embeds a DocuSign Web PowerForm into an HTML iframe.  
       This allows a website's branding and design to be retained while a user fills out 
       and signs a form.</p>
      <div className={collinCss.form_cont}>
        <iframe className="box" src={this.state.url}/>
      </div>
    </div>
        )
    }
}

export default Collin