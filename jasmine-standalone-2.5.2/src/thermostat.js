function Thermostat(){
  this._temperature = 20;
  this._powerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.MIN_TEMPERATURE = 10;
  this.DEFAULT_TEMP = 20;
  this.LOW_ENERGY_USAGE_LIMIT = 18
  this.HIGH_ENERGY_USAGE_LIMIT = 25
}

Thermostat.prototype.currentTemperature = function() {
  return this._temperature;
};

Thermostat.prototype.isMaximumTemperature = function() {
    if (this.isPowerSavingModeOn() === false) {
    return this._temperature === this.MAX_LIMIT_PSM_OFF;
  }
    return this._temperature === this.MAX_LIMIT_PSM_ON;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this._powerSavingMode === true;
};

Thermostat.prototype.up = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
    this._temperature += 1;
};

Thermostat.prototype.down = function() {
  if (this._temperature === this.MIN_TEMPERATURE) {
    return;
  }
    this._temperature -= 1;
};

Thermostat.prototype.turnOffPowerSaving = function() {
  this._powerSavingMode = false;
};

Thermostat.prototype.turnOnPowerSaving = function() {
  this._powerSavingMode = true;
};

Thermostat.prototype.reset = function() {
  this._temperature = this.DEFAULT_TEMP;
};

Thermostat.prototype.checkEnergyUsage = function() {
  if (this._temperature < this.LOW_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this._temperature >= this.HIGH_ENERGY_USAGE_LIMIT) {
    return 'high-usage';
  } else  {
    return 'medium-usage';
  }
};
