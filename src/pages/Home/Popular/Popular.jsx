import React, { useState } from 'react'
import Card from './Card/Card'
import axios from "../../../axios"

const Popular = () => {

    const fetch = axios.get("/popular");

    const [populars, setPopular] = useState(null)
    
    fetch.then(res => setPopular(res.data.flights))

    return (
        <div className='container mt-24'>
            <h2 className='text-3xl font-medium text-center mb-12'>Популярное</h2>
            <div className='flex justify-between items-center md:flex-col dek:gap-8'>
                {populars !== null && populars.length !== 0 && populars.map((popular) => <Card pathUrl={`/reservation/${popular.id}`} key={popular.id} imgUrl={popular.imgUrl} title={popular.title} subtitle={popular.subtitle} hiddenId={popular.id} />)}
            </div>
        </div>
    )
}

export default Popular