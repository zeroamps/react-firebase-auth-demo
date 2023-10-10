import { Link } from 'react-router-dom';
import { homePath } from '../routes';

export function WelcomePage() {
  return (
    <>
      <div className="text-center">
        <h1 className="display-1">Authentication</h1>
        <h2 className="display-5">with Firebase UI</h2>
      </div>
      <Link to={homePath} className="btn btn-lg btn-success">
        Let's start here!
      </Link>
    </>
  );
}
