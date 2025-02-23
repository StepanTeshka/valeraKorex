package app

import (
	"context"
	"database/sql"
	"korex/internal/appinit"
	"korex/internal/handlers"
	"net/http"
)

var db *sql.DB

func InitApp() {
	db = appinit.InitBD()
}

func RunSite(ctx context.Context) error {
	err := appinit.InitDeps(ctx)
	if err != nil {
		return nil
	}

	InitApp()

	http.HandleFunc("/products", func(w http.ResponseWriter, r *http.Request) {
		handlers.GetAllProductsHandler(w, r, db)
	})
	http.HandleFunc("/product", func(w http.ResponseWriter, r *http.Request) {
		handlers.GetProductByIDHandler(w, r, db)
	})
	return nil
}
