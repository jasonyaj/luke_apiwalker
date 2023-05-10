import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Planets = () => {
  
  const [planet, setPlanet] = useState(null);

  const {id} = useParams();

  useEffect( () => {
    axios.get(`https://swapi.dev/api/planets/${id}`)
      .then(response => {
        setPlanet(response.data)
      })
      .catch((err) => console.log(err))
  }, [id])

  return (
    <div>
      <Container>
        {
          planet ? (
            <div  className="mt-5">
              <h1>
                {planet.name}
              </h1>
              <p>
                <span className='fw-bold'>Climate:</span> {planet.climate}
              </p>
              <p>
                <span className='fw-bold'>Terrain:</span> {planet.terrain}
              </p>
              <p>
                <span className='fw-bold'>Surface Water:</span> {planet.surface_water}
              </p>
              <p>
                <span className='fw-bold'>Population:</span> {planet.population}
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

export default Planets