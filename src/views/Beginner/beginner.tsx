import Container from 'react-bootstrap/Container';
import BeginnerMastHead from '../../components/Beginner/BeginnerMastHead';
import BeginnerSectionCards from '../../components/Beginner/BeginnerSectionCards';

function Beginner() {

  return (
      <Container>
        <BeginnerMastHead/>
        <BeginnerSectionCards/>
      </Container>
  );
}

export default Beginner;