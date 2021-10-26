import { useState, useEffect } from 'react'

type Animal = string;

const AnimalList = () => {
    const [data, setData] = useState<null | Animal[]>(null)



	// När komponenten blir MOUNTED ska vi skicka request till servern
	useEffect(() => {
		// async + await använder Promises
		// måste använda en separat funktion som är async
		async function sendRequest() {
			const response = await fetch('/animals')
			const json = await response.json()
			setData(json)
		}
	

		// anropa funktionen direkt
		sendRequest()
	}, [])


	return (
		<div>
            <h2>Animal List</h2>
		{data
        ? data.map(animal => <li>{animal}</li>) 
        : 'loading animals...'}
		</div>
	)
}

export default AnimalList