import React from 'react';
import ReactDOM from 'react-dom'
import SignaturePad from '../signatureSrc/SignatureCanvas'
import styles from './styles.css'
import { Link } from 'gatsby'

class Signature extends React.Component {
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
  trim = () => {
    this.setState({
      trimmedDataURL: this.sigPad.getTrimmedCanvas()
        .toDataURL('image/png')
    })
  }
  render() {

    let { trimmedDataURL } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.sigContainer}>
          <SignaturePad canvasProps={{ className: styles.sigPad }}
            ref={(ref) => { this.sigPad = ref }} />
        </div>
        <div>
          <Link to='/main/'>
            <button className={styles.buttons} onClick={this.clear}>
              Submit
            </button>
          </Link>
        </div>
        {trimmedDataURL
          ? <img className={styles.sigImage}
            src={trimmedDataURL} />
          : null}
      </div>
    )
  }
}

export default Signature

