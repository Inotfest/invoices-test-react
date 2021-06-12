import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './EditForm.scss'

class EditForm extends Component {

  constructor(props) {
    super(props)
    this.state = props.location.state
  }

  onForm = (event) => {
    event.preventDefault()

    if (this.state.number.length < 3) {
      alert(`text field that should have at least 3 symbols`)
      return
    }

    if (this.state.date_created === ``) {
      alert(`Specify Invoice Date`)
      return
    }

    if (this.state.date_supplied === ``) {
      alert(`Specify Supply Date`)
      return
    }

    const obj = JSON.stringify({
      "_id": this.state._id,
      "number": Number(this.state.number),
      "date_created": this.state.date_created,
      "date_supplied": this.state.date_supplied,
      "comment": this.state.comment
    })

    fetch(`http://localhost:3001/invoices/${this.state._id} `, {
      method: `PUT`,
      headers: { 'Content-Type': 'application/json' },
      body: obj
    })
      .then(() => this.props.history.push(`/`))

  }

  onNumber = (event) => {
    this.setState(() => ({ number: event.target.value }))
  }

  onDataCreated = (event) => {
    const date = this.returnDate(event.target.value)
    this.setState(() => ({ date_created: date }))
  }

  onDateSupplied = (event) => {
    const date = this.returnDate(event.target.value)
    this.setState(() => ({ date_supplied: date }))
  }

  onComment = (event) => {
    this.setState(() => ({ comment: event.target.value }))
  }

  displayDate = (date) => {
    return date.split(`-`).reverse().join(`-`)
  }

  returnDate = (date) => {
    return date.split(`-`).reverse().join(`-`)
  }

  render() {

    if (this.state === null) {
      return (
        <div>
          <h1>403 Forbidden</h1>
        </div>
      )
    }

    return (
      <div className="container">
        <div className="edit">
          <div className="edit__invoices">
            <div className="invoices">
              <h3>Edit Invoice</h3>
            </div>
          </div>
          <div className="edit__form">
            <div className="form">
              <form onSubmit={this.onForm}>
                <div className="form__body">
                  <div className="form__number">
                    <label htmlFor="number">Number:</label>
                    <input
                      id="number"
                      name="number"
                      type="tel"
                      value={this.state.number}
                      onChange={this.onNumber}
                      maxLength="10"
                      placeholder="min 3 numbers"
                    />
                  </div>
                  <div className="form__created">
                    <label htmlFor="date_created">Invoice Date:</label>
                    <input
                      id="date_created"
                      name="date_created"
                      type="date"
                      value={this.displayDate(this.state.date_created)}
                      onChange={this.onDataCreated}
                    />
                  </div>
                  <div className="form__supplied">
                    <label htmlFor="date_supplied">Supply Date:</label>
                    <input
                      id="date_supplied"
                      name="date_supplied"
                      type="date"
                      value={this.displayDate(this.state.date_supplied)}
                      onChange={this.onDateSupplied}
                    />
                  </div>
                  <div className="form__comment">
                    <label htmlFor="comment">Comment:</label>
                    <textarea
                      id="comment"
                      name="comment"
                      type="text"
                      value={this.state.comment}
                      onChange={this.onComment}
                      maxLength="160"
                    />
                  </div>
                </div>
                <div className="form__button">
                  <button type="submit" className="btn">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(EditForm)
