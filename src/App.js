import { useState } from "react";

import "./App.css";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";

const App = () => {
	const [courseGoals, setCourseGoals] = useState([
		{ id: "g1", text: "Do all excercises!" },
		{ id: "g2", text: "Finish the course" },
	]);

	const addGoalHandler = (enteredText) => {
		setCourseGoals((prevGoals) => {
			return [{ id: Math.random().toString(), text: enteredText }, ...prevGoals];
		});
	};

	const deleteItemHandler = (goalId) => {
		setCourseGoals((prevGoals) => {
			let updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
			return updatedGoals;
		});
	};

	let content = <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>;

	if (courseGoals.length > 0) {
		content = <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />;
	}

	return (
		<div>
			<section id="goal-form">
				<CourseInput onAddGoal={addGoalHandler} />
			</section>
			<section id="goals">{content}</section>
		</div>
	);
};

export default App;
