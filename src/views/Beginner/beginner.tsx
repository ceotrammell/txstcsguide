import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";

function Beginner() {
    const { t } = useTranslation();

  return (
      <Container>
        Beginner
      </Container>
  );
}

export default Beginner;