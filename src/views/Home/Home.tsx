import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import HomeMastHead from '../../components/Home/HomeMastHead';
import HomeSectionResources from '../../components/Home/HomeSectionResources';

function Home() {
    const { t } = useTranslation();

  return (
      <>
        <HomeMastHead />
        <HomeSectionResources />
      </>
  );
}

export default Home;