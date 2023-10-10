import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { rootPath } from '../routes';

export function HomePage() {
  const navigate = useNavigate();

  async function handleSignOut() {
    navigate(rootPath);
  }

  return (
    <>
      <div className="text-center">
        <h1 className="display-1">Welcome!</h1>
        <h2 className="display-5">You're authenticated</h2>
      </div>
      <Button variant="success" size="lg" onClick={() => handleSignOut()}>
        Let's sign out!
      </Button>
    </>
  );
}
