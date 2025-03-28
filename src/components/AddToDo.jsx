export default function AddToDo({newTask, onClick, onChange}) {
	return (
		<div className="addBlock">
			<h2>Add Todo</h2>
			<div>
				<input 
					type="text" 
					placeholder="Enter a task..."
					value={newTask}
					onChange={onChange}
				/>
				<button
					className="add-button"
					onClick={onClick}
				>Add</button>
			</div>
		</div>
	)
}