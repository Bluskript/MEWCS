package types

import (
	"database/sql"
	"github.com/labstack/echo/v4"
)

type EarthServer struct {
	Echo   *echo.Echo
	DB     *sql.DB
	Config *EarthConfig
}

type EarthConfig struct {
	Server ServerConfig
	DB     DBConfig
}

type ServerConfig struct {
	Port string
}

type DBConfig struct {
	Host     string
	Port     int
	User     string
	Password string
	DBName   string
}
