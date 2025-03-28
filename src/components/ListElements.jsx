import DeleteButton from "./DeleteButton"
import UpButton from "./UpButton"
import DownButton from "./DownButton"

export default function ListElements({task, index, toggleFavorite, deleteTask, moveTaskUp, moveTaskDown}) {
	return (
		<>
			<div>
				<input
					type="checkbox"
					checked={task.isFavorite}
					onChange={() => toggleFavorite(task.id)}
				/>
				<span className="text">{task.text}</span>
			</div>
			<div className="buttons">
				<span className="date">{task.time}</span>
				<DeleteButton onClick={() => deleteTask(index)} />
				<UpButton onClick={() => moveTaskUp(index)} />
				<DownButton onClick={() => moveTaskDown(index)} />
			</div>
		</>
	)
} 