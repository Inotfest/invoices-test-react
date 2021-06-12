import { Link } from 'react-router-dom'
import './LinkAddForm.scss'

const LinkAddForm = () => (
  <div className="container">
    <div className="link">
      <h4 className="link__actions">Actions</h4>
      <Link to="/add">
        <button className="btn">
          Add new
      </button>
      </Link>
    </div>
  </div>
)

export default LinkAddForm