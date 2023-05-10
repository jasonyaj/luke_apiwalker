import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const People = () => {
  
  const [person, setPerson] = useState(null);

  const {id} = useParams()

  useEffect( () => {
    axios.get(`https://swapi.dev/api/people/${id}`)
      .then(response => {
        setPerson(response.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div>
      <Container>
        {
          person ? (
            <div className='mt-5'>
              <h1>
                {person.name}
              </h1>
              <p>
                <span className='fw-bold'>Height:</span> {person.height}
              </p>
              <p>
                <span className='fw-bold'>Hair Color:</span> {person.hair_color}
              </p>
              <p>
                <span className='fw-bold'>Skin Color:</span> {person.skin_color}
              </p>
            </div>
          ):
          <div className='d-flex flex-column align-items-center'>
            <h4>
              "These aren't the droids you're looking for."
            </h4>
            <img src="/img/obi.jpg" alt="" />
          </div>
        }
      </Container>
    </div>
  )
}

export default People