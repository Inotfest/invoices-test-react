import { nanoid } from 'nanoid'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './AddForm.scss'

class AddForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      "_id": nanoid(),
      "number": ``,
      "date_created": ``,
      "date_supplied": ``,
      "comment": ``
    }
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

    const editDate = (date) => {
      return date.split('-').reverse().join('-');
    };

    const obj = JSON.stringify({
      "_id": this.state._id,
      "number": Number(this.state.number),
      "date_created": editDate(this.state.date_created),
      "date_supplied": editDate(this.state.date_supplied),
      "comment": this.state.comment
    })

    fetch(`http://localhost:3001/invoices/`, {
      method: `POST`,
      headers: { 'Content-Type': 'application/json' },
      body: obj
    })
      .then(() => this.props.history.push(`/`))

  }

  onNumber = (event) => {
    this.setState(() => ({ number: event.target.value }))
  }

  onDataCreated = (event) => {
    this.setState(() => ({ date_created: event.target.value }))
  }

  onDateSupplied = (event) => {
    this.setState(() => ({ date_supplied: event.target.value }))
  }

  onComment = (event) => {
    this.setState(() => ({ comment: event.target.value }))
  }

  render() {

    return (
      <div className="container">
        <div className="add">
          <div className="add__invoices">
            <div className="invoices">
              <h3>Create Invoice</h3>
            </div>
          </div>
          <div className="add__form">
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
                      value={this.state.date_created}
                      onChange={this.onDataCreated}
                      placeholder="Select date"
                    />
                  </div>
                  <div className="form__supplied">
                    <label htmlFor="date_supplied">Supply Date:</label>
                    <input
                      id="date_supplied"
                      name="date_supplied"
                      type="date"
                      value={this.state.date_supplied}
                      onChange={this.onDateSupplied}
                      placeholder="Select date"
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
      </div >
    )
  }

}

export default withRouter(AddForm)
