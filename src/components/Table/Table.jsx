import { Link } from 'react-router-dom'
import './Table.scss'

const Table = (props) => {

  const contentTable = props.state.map(item => (
    <tr key={item._id}>
      <td>{item.date_created}</td>
      <td className='number'>{item.number}</td>
      <td>{item.date_supplied}</td>
      <td>{item.comment}</td>
      <td>
        <Link to={{
          pathname: '/edit',
          state: item,
        }}>
          <button className="edit">
            <img src="https://img.icons8.com/android/24/000000/edit.png" />
          </button>
        </Link>
      </td>
      <td><button onClick={() => props.delete(item._id)}
        className="delete"
      >
        <img src="https://img.icons8.com/ios-glyphs/30/000000/delete-sign.png" />
      </button></td>
    </tr >
  ))
    .reverse()

  return (
    <div className="table">
      <h4 className="table__name">Invoices</h4>
      <table className="table__body">
        <thead className="table__thead">
          <tr>
            <th>Create</th>
            <th>No</th>
            <th>Supply</th>
            <th>Comment</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody className="table__tbody">
          {contentTable}
        </tbody>
      </table>
    </div>
  )
}

export default Table


