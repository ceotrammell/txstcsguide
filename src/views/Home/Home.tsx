import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import HomeMastHead from '../../components/Home/HomeMastHead';

function Home() {
    const { t } = useTranslation();

  return (
        <HomeMastHead></HomeMastHead>
  );
}

export default Home;