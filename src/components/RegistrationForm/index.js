import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isSubmitted: false,
  }

  validateFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  validateLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  getFirstNameInput = event => {
    this.setState({firstName: event.target.value})
  }

  getLastNameInput = event => {
    this.setState({lastName: event.target.value})
  }

  renderFirstName = () => {
    const {errorMsg} = this.state
    return (
      <div className="first-name-container">
        <label htmlFor="firstName" className="label">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className="first-name"
          placeholder="First Name"
          onChange={this.getFirstNameInput}
          onBlur={this.onBlurFirstName}
        />
        <p>{errorMsg}</p>
      </div>
    )
  }

  renderLastName = () => {
    const {errorMsg} = this.state
    return (
      <div className="last-name-container">
        <label htmlFor="lastName" className="label">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="last-name"
          placeholder="Last Name"
          onChange={this.getLastNameInput}
          onBlur={this.onBlurLastName}
        />
        <p>{errorMsg}</p>
      </div>
    )
  }

  renderForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form className="form" onSubmit={this.onSubmitForm}>
        <h1 className="heading">Registration</h1>
        <div className="render-first">
          {this.renderFirstName()}
          {showFirstNameError && <p className="error-message">*Required</p>}
        </div>
        <div className="render-last">
          {this.renderLastName()}
          {showLastNameError && <p className="error-message">*Required</p>}
        </div>
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    )
  }

  renderSuccessForm = () => (
    <div className="success-form">
      <h1 className="heading">Registration</h1>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png "
          alt="success"
        />
      </div>
      <p>Submitted Successfully</p>
      <button
        className="button"
        onClick={this.getAnotherResponse}
        type="button"
      >
        Submit Another Response
      </button>
    </div>
  )

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isSubmitted: true})
    } else {
      this.setState({
        isSubmitted: false,
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
      })
    }
  }

  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  getAnotherResponse = () => {
    this.setState(preState => ({
      isSubmitted: !preState.isSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  render() {
    const {isSubmitted} = this.state
    return (
      <>
        <div className="main-container">
          {isSubmitted ? this.renderSuccessForm() : this.renderForm()}
        </div>
      </>
    )
  }
}

export default RegistrationForm
