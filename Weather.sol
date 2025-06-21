// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Weather {
    struct WeatherInfo {
        string city;
        int256 temperature;
        int256 minTemperature;
        int256 maxTemperature;
        uint256 humidity;
        string description;
    }

    WeatherInfo public weatherInfo;
    address public owner;

    event WeatherUpdated(
        string city,
        int256 temperature,
        int256 minTemperature,
        int256 maxTemperature,
        uint256 humidity,
        string description
    );

    constructor() {
        owner = msg.sender; // Set the contract deployer as the owner
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can update the weather.");
        _;
    }

    function updateWeather(
        string memory _city,
        int256 _temperature,
        int256 _minTemperature,
        int256 _maxTemperature,
        uint256 _humidity,
        string memory _description
    ) public onlyOwner {
        weatherInfo = WeatherInfo(
            _city,
            _temperature,
            _minTemperature,
            _maxTemperature,
            _humidity,
            _description
        );

        emit WeatherUpdated(
            _city,
            _temperature,
            _minTemperature,
            _maxTemperature,
            _humidity,
            _description
        );
    }

    function getWeather()
        public
        view
        returns (
            string memory city,
            int256 temperature,
            int256 minTemperature,
            int256 maxTemperature,
            uint256 humidity,
            string memory description
        )
    {
        WeatherInfo memory info = weatherInfo;
        return (
            info.city,
            info.temperature,
            info.minTemperature,
            info.maxTemperature,
            info.humidity,
            info.description
        );
    }
}
