package types

import "time"

type Product struct {
	ID          int       `json:"id"`
	Name        string    `json:"name"`
	ImageURL    string    `json:"image_url"`
	Dimensions  string    `json:"dimensions"`
	Price       float64   `json:"price"`
	MinQuantity int       `json:"min_quantity"`
	CreatedAt   time.Time `json:"created_at"`
}
