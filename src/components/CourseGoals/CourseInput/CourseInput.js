import React, { useState } from "react";
import Button from "../../UI/Button/Button";

import "./CourseInput.css";

const CourseInput = (props) => {
	const [enteredValue, setEnteredValue] = useState("");
	const [isValid, setIsValid] = useState(true);

	const goalInputHandler = (event) => {
		if (event.target.value.trim() !== "") {
			setIsValid(true);
		}
		setEnteredValue(event.target.value);
	};

	const formSubmitHandler = (event) => {
		event.preventDefault();
		if (enteredValue.trim() === "") {
			setIsValid(false);
			return;
		}
		props.onAddGoal(enteredValue.trim());
		setEnteredValue("");
	};

	return (
		<form onSubmit={formSubmitHandler}>
			<div className={`form-control ${isValid ? "" : "invalid"}`}>
				<label style={{ color: isValid ? "black" : "red" }}>Course Goal</label>
				<input
					style={{ borderColor: isValid ? "#fad0ec" : "red" }}
					type="text"
					value={enteredValue}
					onChange={goalInputHandler}
				/>
			</div>
			<Button type="submit">Add Goal</Button>
		</form>
	);
};

export default CourseInput;
