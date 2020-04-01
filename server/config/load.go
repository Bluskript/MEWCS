package config

import (
	"github.com/sirupsen/logrus"
	"github.com/spf13/viper"
	"server/types"
)

func LoadConfig() *types.EarthConfig {
	viper.SetConfigName("earthconfig")
	viper.AddConfigPath(".")
	viper.SetConfigType("yml")
	if err := viper.ReadInConfig(); err != nil {
		logrus.Fatalln("Error reading config", err)
	}
	var cfg types.EarthConfig
	if err := viper.Unmarshal(&cfg); err != nil {
		logrus.Fatalln("Error reading config", err)
	}
	return &cfg
}