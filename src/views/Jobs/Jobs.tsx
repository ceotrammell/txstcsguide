import Container from 'react-bootstrap/Container';
import JobsMastHead from '../../components/Jobs/JobsMastHead';
import JobsSectionCards from '../../components/Jobs/JobsSectionResources';

function Jobs() {

  return (
      <Container>
        <JobsMastHead/>
        <JobsSectionCards/>
      </Container>
  );
}

export default Jobs;