import { Link } from 'react-router-dom';
const Missing = () => {
  return (
    <div>
      <main className='Missing'>
      <h2>Page Not Found</h2>
      <p>Well, thats disappointing.</p>
      <Link to='/'>Visit Our Homepage</Link>
      </main>
    </div>
  )
}

export default Missing
