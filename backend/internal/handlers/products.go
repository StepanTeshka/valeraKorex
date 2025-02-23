package handlers

import (
	"database/sql"
	"encoding/json"
	"korex/internal/functions"
	"net/http"
	"strconv"
)

func GetAllProductsHandler(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	products, err := functions.GetAllProducts(db)
	if err != nil {
		http.Error(w, "Ошибка при получении товаров", http.StatusInternalServerError)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(products)
}

func GetProductByIDHandler(w http.ResponseWriter, r *http.Request, db *sql.DB) {
	idStr := r.URL.Query().Get("id")
	id, err := strconv.Atoi(idStr)
	if err != nil {
		http.Error(w, "Некорректный ID", http.StatusBadRequest)
		return
	}

	product, err := functions.GetProductByID(db, id)
	if err != nil {
		http.Error(w, "Товар не найден", http.StatusNotFound)
		return
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(product)
}
