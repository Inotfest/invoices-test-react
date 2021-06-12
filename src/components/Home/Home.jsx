import { Component } from 'react'
import LinkAddForm from '../LinkAddForm/LinkAddForm'
import Table from '../Table/Table'
import './Home.scss'

class Home extends Component {

  constructor(props) {
    super()
    this.state = {
      invoices: [],
      loading: true,
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3001/invoices`)
      .then(response => response.json())
      .then(json => this.setState(() => ({ invoices: json })))
      .then(() => this.setState(() => ({ loading: false })))
  }

  deleteElement = (_id) => {

    fetch(`http://localhost:3001/invoices/${_id}`, {
      method: `DELETE`
    })

    const newInvoices = [...this.state.invoices]
    const index = newInvoices.findIndex(item => item._id === _id)

    newInvoices.splice(index, 1)

    this.setState(() => ({ invoices: newInvoices }))

  }

  render() {
    return (
      <div className="container">
        <div className="home">
          <div className="home__invoices">
            <div className="invoices">
              <h3>Invoices</h3>
            </div>
          </div>
          <div className="home__link">
            <LinkAddForm />
          </div>
          <div className="home__table">
            {
              this.state.loading
                ?
                <h2>Loading...</h2>
                :
                <Table state={this.state.invoices} delete={this.deleteElement} />
            }
          </div>
        </div>
      </div>
    )
  }
}


export default Home
