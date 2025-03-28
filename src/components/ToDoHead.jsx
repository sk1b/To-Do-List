export default function ToDoHead({onChange}) {
	
	return (
		<div className="To-Do-ListHead"> 
			<h1>To-Do List</h1>

			<div className="headButtons">
				<button onClick={ () => onChange("add")}>add</button>
				<button onClick={ () => onChange("list")}>list</button>
			</div>
		</div>	
	)
}