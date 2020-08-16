import React from 'react';
import TableData from '../components/table-data';

function Contact() {
	return (
    <div>
        <h1>Contact Us</h1>
        <table>
            <tr><th scope="col">Name</th><th scope="col">Phone</th></tr>
            <tr><TableData /></tr>
        </table>
    
    </div>);
}

export default Contact;