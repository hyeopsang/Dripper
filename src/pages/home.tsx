import { Link } from 'react-router';

export const Home = () => {
  return (
    <section>
      <Link to={'/profile'}>프로필로 이동</Link>
    </section>
  );
};
