import { Link } from 'react-router-dom'

/**
 * Component to render Error 404 page
 * @function Error
 * @returns {JSX}
 */
const Error = () => {
  
  return (
    <main className="Notification">
      <h1>404</h1>
      <p>Oups! The page doesn't exist</p>
      <Link to="/">Return to the Home Page</Link>
    </main>
  )
}

export default Error;

