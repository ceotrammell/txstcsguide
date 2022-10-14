import Container from 'react-bootstrap/Container';
import ClubsMastHead from '../../components/Clubs/ClubsMastHead';
import ClubsSectionCards from '../../components/Clubs/ClubsSectionResources';

function Clubs() {

  return (
      <Container>
        <ClubsMastHead/>
        <ClubsSectionCards/>
      </Container>
  );
}

export default Clubs;