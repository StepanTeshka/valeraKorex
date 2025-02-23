package functions

import (
	"database/sql"
	"korex/internal/types"
	"log"
)

func GetAllProducts(db *sql.DB) ([]types.Product, error) {
	rows, err := db.Query("SELECT id, name, image_url, dimensions, price, min_quantity, created_at FROM products")
	if err != nil {
		log.Println("Ошибка запроса всех товаров:", err)
		return nil, err
	}
	defer rows.Close()

	var products []types.Product
	for rows.Next() {
		var p types.Product
		err := rows.Scan(&p.ID, &p.Name, &p.ImageURL, &p.Dimensions, &p.Price, &p.MinQuantity, &p.CreatedAt)
		if err != nil {
			log.Println("Ошибка при сканировании строки:", err)
			return nil, err
		}
		products = append(products, p)
	}

	if err = rows.Err(); err != nil {
		log.Println("Ошибка в обработке результатов:", err)
		return nil, err
	}

	return products, nil
}
