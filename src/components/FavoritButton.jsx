export default function FavoritButton({onClick, showFavorites}) {
	return (
		<button className="favoritButton" onClick={onClick}>
			{showFavorites ? "Показати всі" : "Улюблені"}
		</button>
	)
}