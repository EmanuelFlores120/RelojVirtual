// Función para obtener el formato de hora con AM/PM
function getFormattedTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var timeString = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
    return timeString;
  }
  
  // Función para obtener la fecha actual con el día de la semana y el nombre del mes
function getFormattedDate() {
    var date = new Date();
    var daysOfWeek = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    var months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dayOfWeek = daysOfWeek[date.getDay()];
    var day = date.getDate();
    var month = months[date.getMonth()];
    var year = date.getFullYear();
    var dateString = dayOfWeek + ' de ' + day + ' de ' + month + ' de ' + year;
    return dateString;
  }
  
  // Función para actualizar la información de fecha y hora en el reloj
  function updateClock() {
    document.getElementById('clock').innerHTML = getFormattedTime();
    document.getElementById('date').innerHTML = getFormattedDate();
  }
  
  // Actualizar el reloj cada segundo
  setInterval(updateClock, 1000);
  