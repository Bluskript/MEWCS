package types

import "github.com/labstack/echo/v4"

type EarthServer struct {
	HTTPServer *echo.Echo
	Config *EarthConfig
}

type EarthConfig struct {
	Server ServerConfig
	DB DBConfig
}

type ServerConfig struct {
	Port string
}

type DBConfig struct {
	Port string
}