import { useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';

export const ProfileCard = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <h2>ProfileCard</h2>
      <br />
      <p>USERNAME: {user.name}</p>
      <br />
      <p>USER EMAIL: {user.email}</p>
    </div>
  );
};
