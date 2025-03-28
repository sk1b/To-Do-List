import ToDoHead from "./ToDoHead"
import AddToDo from "./AddToDo"
import FavoritButton from "./FavoritButton"
import ListElements from "./ListElements"
import React, { useState } from "react"

export default function ToDoList() {
	const [tasks, setTasks] = useState([
		{ id: 1, text: "One", time: new Date().toLocaleTimeString(), isFavorite: false },
		{ id: 2, text: "Two", time: new Date().toLocaleTimeString(), isFavorite: false },
		{ id: 3, text: "Three", time: new Date().toLocaleTimeString(), isFavorite: false },
	]);

	const [newTask, setNewTask] = useState("");
	const [nav, setNav] = useState("list");
	const [showFavorites, setShowFavorites] = useState(false);

	function handleInputChange(event) {
		setNewTask(event.target.value);
	}

	function addTask() {
		if (newTask.trim()) {
			const taskText = {
				id: Date.now(),
				text: newTask,
				time: new Date().toLocaleTimeString(),
				isFavorite: false,
			};
			setTasks([taskText, ...tasks]); 
			setNewTask("");
		}
	}

	function deleteTask(index) {
		setTasks(tasks.filter((_, i) => i !== index));
	}

	function moveTaskUp(index) {
		if (index > 0) {
			const updateTask = [...tasks];
			[updateTask[index], updateTask[index - 1]] = [updateTask[index - 1], updateTask[index]];
			setTasks(updateTask);
		}
	}

	function moveTaskDown(index) {
		if (index < tasks.length - 1) {
			const updateTask = [...tasks];
			[updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
			setTasks(updateTask);
		}
	}

	function toggleFavorite(id) {
		setTasks(tasks.map(task => (task.id === id ? { ...task, isFavorite: !task.isFavorite } : task)));
	}

	const toggleShowFavorites = () => {
		setShowFavorites(!showFavorites);
		setNav("list");
	};

	const filteredTasks = showFavorites ? tasks.filter(task => task.isFavorite) : tasks;

	return (
		<>
			<div className="To-Do-List">
				<ToDoHead onChange={setNav}/>

				<main>
					{nav === "list" && (
						<>	
							<div className="listName">
								<h3>My Todo List</h3>
								<FavoritButton onClick={toggleShowFavorites} showFavorites={showFavorites}/>
							</div>
							<ol>
								{filteredTasks.map((task, index) => (
									<li key={task.id} style={{ backgroundColor: task.isFavorite ? "gold" : "white" }}>
										<ListElements
											task={task}
											index={index}
											toggleFavorite={toggleFavorite}
											deleteTask={deleteTask}
											moveTaskUp={moveTaskUp}
											moveTaskDown={moveTaskDown}
										/>
									</li>
								))}
							</ol>
						</>
					)}

					{nav === "add" && <AddToDo newTask={newTask} onClick={addTask} onChange={handleInputChange} />}
				</main>

			</div>
		</>
	);
}
