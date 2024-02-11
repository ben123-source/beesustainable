import React, { useState } from "react";

const UserInputForm = () => {
	const [inputValue, setInputValue] = useState("");

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("User entered:", inputValue);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Input COP Location:
				<input
					class="border-[#64422F] border-4 rounded-lg drop-shadow-xl bg-[#FFFBE5]"
					type="text"
					value={inputValue}
					onChange={handleInputChange}
				/>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserInputForm;
