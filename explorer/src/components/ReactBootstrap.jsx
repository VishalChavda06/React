
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <>
    <div style={{ padding: '1rem' , backgroundColor: '#f8f9fa' , borderRadius: '8px' , display: 'flex', flexDirection: 'column', alignItems: 'center' , margin: '20px', textAlign: 'center' }}>
      <h1 style={{marginBottom:'10px'}}>React Bootstrap Example</h1>
      <div style={{ display: 'flex' , gap: '20px', flexWrap: 'wrap' }}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  );
}

export default ReactBootstrap
