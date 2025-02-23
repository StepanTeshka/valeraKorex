package main

import (
	"context"
	"korex/internal/app"
	"log"
	"net/http"
)

func main() {
	ctx := context.Background()

	err := app.RunSite(ctx)
	if err != nil {
		log.Fatalf("failed to run appSite: %s", err.Error())
	}

	log.Println("Запуск сервера на :5051...")
	err = http.ListenAndServe(":5051", nil)
	if err != nil {
		log.Fatal("Ошибка запуска сервера:", err)
	}

}

func enableCors(w *http.ResponseWriter, origin string) {
	(*w).Header().Set("Access-Control-Allow-Origin", origin)
	(*w).Header().Set("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE")
	(*w).Header().Set("Access-Control-Allow-Headers", "Content-Type, Authorization")
	(*w).Header().Set("Access-Control-Allow-Credentials", "true")
}
