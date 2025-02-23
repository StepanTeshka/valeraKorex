package functions

import (
	"database/sql"
	"korex/internal/types"
	"log"
)

func GetProductByID(db *sql.DB, id int) (types.Product, error) {
	var p types.Product
	err := db.QueryRow("SELECT id, name, image_url, dimensions, price, min_quantity, created_at FROM products WHERE id = $1", id).
		Scan(&p.ID, &p.Name, &p.ImageURL, &p.Dimensions, &p.Price, &p.MinQuantity, &p.CreatedAt)

	if err != nil {
		if err == sql.ErrNoRows {
			log.Println("Товар не найден:", id)
			return p, err
		}
		log.Println("Ошибка при запросе товара:", err)
		return p, err
	}

	return p, nil
}
