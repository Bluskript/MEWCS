package main

import (
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"
	"server/api"
	"server/config"
	"server/db"
	"server/types"
)

func main() {
	var s types.EarthServer
	s.Config = config.LoadConfig()
	s.DB = db.Connect(s.Config)
	e := echo.New()
	s.Echo = e
	e.Use(middleware.Recover())
	e.Use(middleware.Logger())
	e.Pre(middleware.AddTrailingSlash())
	api.Build(s)
	e.Logger.Fatal(e.Start(s.Config.Server.Port))
}
