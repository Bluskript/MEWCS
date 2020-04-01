package api

import (
	"server/api/common"
	"server/types"
)

func Build(s types.EarthServer) {
	s.HTTPServer.GET("/", common.Health)
}