package v1

import (
	"github.com/labstack/echo/v4"
	"net/http"
)

func Status(c echo.Context) error {
	return c.String(http.StatusOK, "v1 works")
}