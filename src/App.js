import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';

export default function App() {
	return (
		<Router>
			<div className="bg-yale">
				<div className="container pt-5" style={{ minHeight: '500px' }}>
					<div className="row">
						<header className="col-3">
							My Awesome Website
							<nav className="mt-5">
								<ul>
									<li>
										<Link to="/">Home</Link>
									</li>
									<li>
										<Link to="/about">About</Link>
									</li>
									<li>
										<Link to="/contact-us">Contact Us</Link>
									</li>
								</ul>
							</nav>
						</header>
						<main className="col">
							<Switch>
								<Route path="/about">
									<About />
								</Route>
								<Route path="/contact-us">
									<Contact />
								</Route>
								<Route path="/">
									<Home />
								</Route>
							</Switch>
						</main>
					</div>
				</div>
			</div>
			<footer className="container mt-3">Here is my footer </footer>
		</Router>
	);
}
