import React from 'react';
// import ReactDOM from 'react-dom'
import SignaturePad from '../signatureSrc/SignatureCanvas'
import signaturePageCss from './signaturePage.module.css'
import { Link } from 'gatsby'

class SignaturePage extends React.Component {
  // state = { trimmedDataURL: null }
  constructor(props) {
    super(props)
    this.state = {
      trimmedDataURL: null
    }
  }
  sigPad = {}
  clear = () => {
    this.sigPad.clear()
  }
  // trim = () => {
  //   this.setState({
  //     trimmedDataURL: this.sigPad.getTrimmedCanvas()
  //       .toDataURL('image/png')
  //   })
  // }
  render() {

    let { trimmedDataURL } = this.state
    return (
      <div className={signaturePageCss.container}>
        <div className={signaturePageCss.sigContainer}>
          <SignaturePad canvasProps={{ className: signaturePageCss.sigPad }}
            ref={(ref) => { this.sigPad = ref }} />
        </div>
        <div>
          <Link to='/main/'>
            <button className={signaturePageCss.buttons} onClick={this.clear}>
              Submit
            </button>
          </Link>
        </div>
        {trimmedDataURL
          ? <img alt="placeholder" className={signaturePageCss.sigImage}
            src={trimmedDataURL} />
          : null}
      </div>
    )
  }
}

export default SignaturePage

