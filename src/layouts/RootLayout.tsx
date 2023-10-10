import { Link, Outlet, useNavigate } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { rootPath, signInPath } from '../routes';
import { useAuthUser } from '../features/authentication/hooks/useAuthUser';
import logo from './../public/firebase.svg';

export function RootLayout() {
  return (
    <>
      <Navbar collapseOnSelect expand="sm" bg="primary" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand className="text-uppercase d-flex gap-1">
            <Link to={rootPath}>
              <img src={logo} width="30" height="30" className="d-inline-block align-top" alt="Logo" />
            </Link>
            Demo
          </Navbar.Brand>
          <SignInNavLink />
          <SignOutNavLink />
        </Container>
      </Navbar>
      <Container className="h-100 d-flex flex-column justify-content-center align-items-center gap-3">
        <Outlet />
      </Container>
    </>
  );
}

export function SignOutNavLink() {
  const user = useAuthUser();
  const navigate = useNavigate();

  async function handleSignOut() {
    navigate(rootPath);
  }

  if (!user) return null;

  return (
    <Nav>
      <Button variant="link" className="nav-link" onClick={() => handleSignOut()}>
        Sign out
      </Button>
    </Nav>
  );
}

export function SignInNavLink() {
  const user = useAuthUser();

  if (user) return null;

  return (
    <Nav>
      <Link to={signInPath} className="nav-link">
        Sign in
      </Link>
    </Nav>
  );
}
