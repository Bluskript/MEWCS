package db

import (
	"database/sql"
	"fmt"
	_ "github.com/lib/pq"
	"github.com/sirupsen/logrus"
	"server/types"
)

func Connect(cfg *types.EarthConfig) *sql.DB {
	connStr := fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable", cfg.DB.Host, cfg.DB.Port, cfg.DB.User, cfg.DB.Password, cfg.DB.DBName)
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		logrus.Fatalln("Error connecting to database!", err)
	}
	if err := db.Ping(); err != nil {
		logrus.Fatalln("Error connecting to database!", err)
	}
	return db
}