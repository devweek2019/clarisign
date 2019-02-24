import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Webcam from 'react-webcam'
import { Link } from 'gatsby'

import Clarifai from 'clarifai'

import '../components/styles.css'

const app = new Clarifai.App({
  apiKey: 'ef16427578aa4753a5012b7235cbf860',
})

class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'none',
      query_format: '',
      file: '',
      imagePreviewUrl: '',
      isHidden: false,
    }
  }


  // https://codepen.io/hartzis/pen/VvNGZP
  _handleSubmit(e) {
    e.preventDefault()
    this.capture()

    const url = this.webcam.getScreenshot()
    
    // var url = this.state.imagePreviewUrl

    var base64Data = url.split('base64,')[1]

    app.models
      .predict({id:'general'}, { base64: base64Data })
      .then(response => {
        let result = response['outputs'][0]['data']['concepts']
        console.log(result)

        // Database fetch
        fetch(url)
          .then(response => response.json())
          .then(json => {
            console.log(json)
            const res_email = json[0]['data']['email']
            const res_twitter = json[0]['data']['twitter']

            this.setState({
              email: res_email,
              twitter: res_twitter
            })
            // console.log(json[0])
          })
      })

    // .then(json => this.setState({ loading: true, msg: json.msg }))
    // console.log('handle uploading-', base64Data)
  }

  _handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  setRef = webcam => {
    this.webcam = webcam
  }

  goBack = () => {
    window.history.back()
  }

  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  capture = () => {
    const imageSrc = this.webcam.getScreenshot()
    this.setState({
      imagePreviewUrl: imageSrc, isHidden: true
    })
  }

  render() {
    const videoConstraints = {
      width: 2280,
      height: 720,
      facingMode: 'user',
    }

    let { imagePreviewUrl } = this.state
    let $imagePreview = null
    if (imagePreviewUrl) {
      $imagePreview = (
        <img
          className="video-preview"
          id="video_upload_preview"
          src={imagePreviewUrl}
        />
      )
    } else {
      $imagePreview = (
        <img
          className="video-preview"
          id="video_upload_preview"
          src="http://placehold.it/100x100"
          alt="your image"
        />
      )
    }

    return (<div>
      <div className="video-container">
      <div className="center">
            
            
      {!this.state.isHidden && <Webcam
              audio={false}
              height={350}
              ref={this.setRef}
              screenshotFormat="image/png"
              width={550}
              vnpmideoConstraints={videoConstraints}
            />}
            
          </div>
        <div className="previewComponent">
          <div className="preview-container-video">
            
            <div className="imgPreview video-preview">{$imagePreview}</div>
          </div>
          <div className="videoButtons">
            <form className="video" onSubmit={e => this._handleSubmit(e)}>
              <button
                className="button-style"
                type="submit"
                onClick={e => this._handleSubmit(e)}
              >
                Capture Image
              </button>
            </form>
          </div>

        </div>
      </div>
      
      </div>
    )
  }
}

export default Video
