import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";

function Home() {
    const { t } = useTranslation();

  return (
      <Container>
        Jobs
      </Container>
  );
}

export default Home;