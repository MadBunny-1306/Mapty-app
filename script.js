'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// Geolocation API
if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (position) {
      const { latitude } = position.coords;
      const { longitude } = position.coords;
      console.log(
        `https://www.google.com/maps/@${latitude}.${longitude},15z?hl=sr` // copy url from google maps, and replace numbers with latitude and longitude using template literal like this.. right click on this link in console and open in new tab to see map
      );
    },
    function () {
      alert('Could not get your position');
    }
  );

// getCurrentPosition() takes as arguments 2 callback functions, first is on seccess (when map loads), second is if map doesn't load
