import React, { useState } from "react";

const UserInputForm = () => {
	const [selectedOption, setSelectedOption] = useState("");

	const handleSelectChange = (event) => {
		setSelectedOption(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log("User selected:", selectedOption);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>
				Select COP Location:
				<select
					className="border-[#64422F] border-4 rounded-lg drop-shadow-xl bg-[#FFFBE5]"
					value={selectedOption}
					onChange={handleSelectChange}>
					<option value="">Select an option</option>
					<option value="USA">United States</option>
					<option value="CA">Canada</option>
					<option value="AU">Austrilia</option>
					<option value="N/UK">Norway/United Kingdom</option>
				</select>
			</label>
			<button type="submit">Submit</button>
		</form>
	);
};

export default UserInputForm;
