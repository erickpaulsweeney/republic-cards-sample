import Card from './components/Card';
import Container from './components/Container';
import Header from './components/Header';
import Subcontainer from './components/Subcontainer';
import Subheader from './components/Subheader';
import { data } from './data/data';

function App() {
  return (
    <Container>
      <Header />
      <Subheader />
      <Subcontainer>
        {data.map((company) => <Card key={company.name} company={company} />)}
      </Subcontainer>
    </Container>
  );
}

export default App;
