import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

const PlanetList = (props) => {
    const {id} = useParams();

    const [planetData, setPlanetData] = useState({});

    useEffect(() => {
        axios.get(`http://swapi.dev/api/planets/${id}`)
        .then(res => {
            console.log(res.data);
            setPlanetData(res.data);
        })
        .catch(err=>console.log(err))
    }, [])

    return (

        <div>
            <h1 className="display-1">{planetData.name}</h1>
            <p>Climate: {planetData.climate}</p>
            <p>Terrain: {planetData.terrain}</p>
            <p>Surface Water: {planetData.surface_water}</p>
            <p>Population: {planetData.population}</p>
        </div>
    )
}

export default PlanetList;