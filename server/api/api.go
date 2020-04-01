package api

import (
	"github.com/labstack/echo/v4"
	"server/api/common"
	"server/api/v1"
	"server/types"
)

func registerV1(g *echo.Group) {
	path := g.Group("/v1")
	path.GET("/status", v1.Status)
}

func Build(s types.EarthServer) {
	s.Echo.GET("/", common.Health)
	apiGroup := s.Echo.Group("/api")
	registerV1(apiGroup)
}