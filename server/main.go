package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"server/api"
	"server/config"
	"server/types"
)

func main() {
	var s types.EarthServer
	s.Config = config.LoadConfig()
	e := echo.New()
	s.HTTPServer = e
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Use(middleware.RemoveTrailingSlash())
	api.Build(s)
	e.Logger.Fatal(e.Start(s.Config.Server.Port))
}
