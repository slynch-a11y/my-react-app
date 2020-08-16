import React, { useEffect } from 'react';

function About() {
	useEffect(() => {
		// Update the document title using the browser API
		document.title = 'About Page';
	});
	return <h1>About</h1>;
}

export default About;