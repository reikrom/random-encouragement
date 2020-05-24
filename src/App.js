import React, { useState, useEffect } from "react";
import "./App.css";
import { encouragements } from "./encouragement";

function App() {
	const [number, setNumber] = useState(1);

	const chooseEncouragement = () => {
		setNumber(Math.floor(Math.random() * Math.floor(101)));
	};

	useEffect(() => {
		setInterval(() => {
			chooseEncouragement();
		}, 30000);
		return () => {
			clearInterval();
		};
	}, []);

	return (
		<div className="App">
			<header onClick={chooseEncouragement} className="App-header">
				<h1 style={{ color: "white" }}>{encouragements[number]}</h1>
			</header>
		</div>
	);
}

export default App;
