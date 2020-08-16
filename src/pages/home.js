import React from 'react';
import Content from '../components/content';

function Home() {
	// // Similar to componentDidMount and componentDidUpdate:
	// useEffect(() => {
	// 	// Update the document title using the browser API
	// 	document.title = "Home | React App";
	// });
	return (
		<div>
			<h1>Home</h1>
			<Content />
		</div>
	);
}

export default Home;
