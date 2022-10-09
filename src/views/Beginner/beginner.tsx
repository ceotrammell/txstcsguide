import Container from 'react-bootstrap/Container';
import { useTranslation } from "react-i18next";
import BeginnerMastHead from '../../components/Beginner/BeginnerMastHead';
import BeginnerSectionCards from '../../components/Beginner/BeginnerSectionCards';

function Beginner() {
    const { t } = useTranslation();

  return (
      <Container>
        <BeginnerMastHead/>
        <BeginnerSectionCards/>
      </Container>
  );
}

export default Beginner;