import React, { useState, useEffect } from 'react';

function Home() {
	const [ count, setCount ] = useState(0);
    
    
	// Similar to componentDidMount and componentDidUpdate:
	useEffect(() => {
		// Update the document title using the browser API
		document.title = "Home";
	});

	return (
		<div>
			
            <h1>Home</h1>
			<div className="row">
				<div className="col-3">
			<button className="mt-5" onClick={() => setCount(count + 1)} >Click me</button> 
			</div>
			<div className="col mt-3 display-1">{ count >=1 ? <div aria-live="polite">{count}</div> : null}</div>
			</div>
		</div>
	);
}

export default Home;