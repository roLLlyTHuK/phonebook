import { Route, Routes, Navigate } from 'react-router-dom';
import { Home, Contacts, Auth, Profile, ToDoPage } from '../pages';
import { Layout } from './Layout/Layout';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import { RestrictedRoute } from './Utilites/RestrictedRoute';
import { PrivateRoute } from './Utilites/PrivateRoute';

export function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/auth"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Auth />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
        <Route
          path="/profile"
          element={<PrivateRoute redirectTo="/login" component={<Profile />} />}
        />
        <Route
          path="/todo"
          element={
            <PrivateRoute redirectTo="/login" component={<ToDoPage />} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
}
