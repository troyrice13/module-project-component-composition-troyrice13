import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`




function App() {
  const [nasaPic, setNasaPic] = useState()

  
  
  useEffect(() => {
    axios.get(url)
    .then((res) => {
      console.log(res.data)
      setNasaPic(res.data)
    })
    .catch(err => {
      console.error(err)
    })
    }, [])
    if (!nasaPic) return 'Fetching Photo of the Day...'
    return (
      <section>
        <Card title={nasaPic.title}
        imageUrl={nasaPic.url}
        text={nasaPic.explanation}
        date={nasaPic.date}/>
      </section>
    )

}



export default App
