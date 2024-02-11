import React, { useState } from "react";

const UserInputForm = () => {
	// State to store the user input
	const [inputValue, setInputValue] = useState("");

	// Event handler for input change
	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	// Event handler for form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		// Do something with the input value (e.g., send it to a server, update state, etc.)
		console.log("User entered:", inputValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Enter something:
				{/* Input field with value and onChange controlled by state */}
				<input type="text" value={inputValue} onChange={handleInputChange} />
			</label>
			{/* Button to submit the form */}
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserInputForm;