import React, { useState, useEffect, useRef } from 'react';

function About() {
	const [ count, setCount ] = useState(0);
	const mainRef = useRef(null)
	useEffect(()=>{
		document.title="About"
		mainRef.current.focus()
	}, [mainRef])
	return (
		<div>
			<h1 ref={mainRef} tabIndex="-1">About</h1>
			<div className="row">
				<div className="col-3">
					<button className="mt-5" onClick={() => setCount(count + 1)}>
						Click me
					</button>
				</div>
				<div className="col mt-3 display-1">
					<div aria-live="polite">{count}</div>
				</div>
			</div>
		</div>
	);
}

export default About;
