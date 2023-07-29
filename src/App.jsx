import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';

function App() {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			const response = await axios.get('./data.json');
			setData(response.data);
			setIsLoading(false);
		}
		fetchData();
	}, []);

	if (isLoading) return <p>Loading...</p>;
	if (!data) return <p>No profile data</p>;
	return <Category data={data} />;
}

export default App;
