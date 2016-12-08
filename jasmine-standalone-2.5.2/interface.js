$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat._temperature);
    $("#up").click(function() {
      thermostat.up();
    });
    $("#down").click(function() {
      thermostat.down();
    });
    $("#reset").click(function() {
      thermostat.reset();
    });
    $("#PSM-off").click(function() {
      thermostat.turnOffPowerSaving();
    });
    $("#PSM-on").click(function() {
      thermostat.turnOnPowerSaving();
    });
});
