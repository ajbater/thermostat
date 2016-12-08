function Thermostat(){
  this._temperature = 20;
  this._powerSavingMode = true;
  this._maxTemperature = 25;
  this.MIN_TEMPERATURE = 10;
}

Thermostat.prototype.temperature = function() {
  return this._temperature;
};

Thermostat.prototype.up = function() {
  this._temperature = this._temperature + 1;
};

Thermostat.prototype.down = function() {
  this._temperature = this._temperature - 1;
};

Thermostat.prototype.turnOffPowerSaving = function() {
  this._powerSavingMode = false;
};
