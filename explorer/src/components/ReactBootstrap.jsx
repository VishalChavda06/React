
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ReactBootstrap = () => {
  return (
    <>
      <h1>React Bootstrap Example</h1>
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
    </>
  );
}

export default ReactBootstrap
