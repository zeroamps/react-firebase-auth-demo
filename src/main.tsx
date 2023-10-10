import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { AuthProvider } from './features/authentication/contexts/AuthProvider';
import { homePath, rootPath, signInPath } from './routes';
import { ProtectedRoute } from './layouts/ProtectedRoute';
import { RootLayout } from './layouts/RootLayout';
import { WelcomePage } from './pages/WelcomePage';
import { HomePage } from './pages/HomePage';
import { SignInPage } from './pages/SignInPage';
import './styles.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={rootPath} element={<RootLayout />}>
      <Route index path={rootPath} element={<WelcomePage />} />
      <Route path={homePath} element={<ProtectedRoute />}>
        <Route index path={homePath} element={<HomePage />} />
      </Route>
      <Route path={signInPath} element={<SignInPage />} />
    </Route>
  ),
  {
    basename: import.meta.env.BASE_URL
  }
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
