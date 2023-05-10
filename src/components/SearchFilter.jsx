import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SearchFilter = () => {
  
  const [type, setType] = useState('people');
  const [id, setId] = useState('');

  const navigate = useNavigate()
  
  const search = (e) => {
    e.preventDefault()

    navigate(`/${type}/${id}`)
  }

  return (
    <div>
      <Container>
        <Form className='mt-5' onSubmit={search}>
          <Form.Group>
            <Row>
              <Col>
                <p>
                  Search for:
                </p>
                <Form.Select onChange={e => setType(e.target.value)} value={type}>
                  <option value='people'>People</option>
                  <option value='planets'>Planet</option>
                </Form.Select>
              </Col>
              <Col>
                <p>
                  ID:
                </p>
                <Form.Control type="text" onChange={e => setId(e.target.value)} value={id}/>
              </Col>
            </Row>
          </Form.Group>
          <Button className='mt-2' type='submit'>Search</Button>
        </Form>
      </Container>
    </div>
  )
}

export default SearchFilter