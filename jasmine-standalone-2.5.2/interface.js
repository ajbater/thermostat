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

    $('#current-city').change(function() {
      var city = $('#current-city').val();
      var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
      var token = '&appid=e5cee232ac717bdd15541a4aceb02aa2';
      var units = '&units=metric';
      $.get(url + token + units, function(data) {
        $('#current-temperature').text(data.main.temp);
      })
    })

    function updateTemperature() {
      $('#temperature').text(thermostat._temperature);
      $('#temperature').attr('class', thermostat.checkEnergyUsage());
    };
});
