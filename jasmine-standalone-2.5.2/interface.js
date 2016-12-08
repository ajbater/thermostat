$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

    $("#up").click(function() {
      thermostat.up();
      updateTemperature();

    });
    $("#down").click(function() {
      thermostat.down();
      updateTemperature();
    });
    $("#reset").click(function() {
      thermostat.reset();
      updateTemperature();
    });
    $("#PSM-off").click(function() {
      thermostat.turnOffPowerSaving();
      updateTemperature();
    });
    $("#PSM-on").click(function() {
      thermostat.turnOnPowerSaving();
      updateTemperature();
    });

    function updateTemperature() {
      $('#temperature').text(thermostat._temperature);
      $('#temperature').attr('class', thermostat.checkEnergyUsage());
    };
});
