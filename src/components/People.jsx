import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PeopleList = (props) => {
    const {id} = useParams();

    const [peopleData, setPeopleData] = useState({});

    useEffect( () => {
        axios.get(`https://swapi.dev/api/people/${id}`)
            .then(res => {
                console.log(res.data)
                setPeopleData(res.data);
            })
            .catch(err=>console.log(err))
    },[])

    return (
        
        <div>
            <h1 className="display-1">{peopleData.name}</h1>
            <p>Height: {peopleData.height} cm</p>
            <p>Mass: {peopleData.mass} kg</p>
            <p>Hair Color: {peopleData.hair_color}</p>
            <p>Skin Color: {peopleData.skin_color}</p>
        </div>
    )
}

export default PeopleList;