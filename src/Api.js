import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Api() {
	// const zip = '94501';
	// const units = 'imperial';
	// const apikey = 'a1faba83107bd1140d4538408420862f';
	const [zip, setZip] = useState('94501');
	const [units, setUnits] = useState('imperial');
	const [apikey, setApikey] = useState('a1faba83107bd1140d4538408420862f');
	const path = `https://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=${apikey}&units=${units}`;
	const [weathere, setWeathere] = useState(null);

	let content = null;

	useEffect(() => {
		axios.get(path).then((response) => {
			setWeathere(response.data);
		});
	}, [path]);

	if (weathere) {
		return (
			<div>
				<h2> Current weather: {weathere.weather[0].description}</h2>
				<p> Current Temperature: {weathere.main.temp}</p>
				<p> Current Humidity: {weathere.main.humidity}</p>
				<form>
					<input
						type="number"
						placeholder="What is your zip code?"
						style={{ width: 300 }}
						value={zip}
						onChange={(e) => setZip(e.target.value)}
					></input>

					<select onChange={(e) => setUnits(e.target.value)}>
						<option value="metric">Celsius</option>
						<option value="imperial">Fahrenheit</option>
						<option value="standard">Kelvin</option>
					</select>
				</form>
			</div>
		);
	} else {
		return <div>{content}</div>;
	}
}
export default Api;
