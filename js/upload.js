'use strict';

(function () {
  // var URL = 'https://js.dump.academy/code-and-magick';
  // var load = function (onLoad, onError) {
  //
  // };
  // var save = function (data, onLoad, onError) {
  //   var xhr = new XMLHttpRequest();
  //   xhr.responseType = 'json';
  //
  //   xhr.addEventListener('load', function () {
  //     onLoad(xhr.response);
  //   });
  //
  //   xhr.open('POST', URL);
  //   xhr.send(data);
  // };
  // window.backend = {
  //   load: load,
  //   save: save
  // };
  var URL = 'https://js.dump.academy/code-and-magick';

  window.upload = function (data, onSuccess) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.addEventListener('load', function () {
      onSuccess(xhr.response);
    });
    xhr.open('POST', URL);
    xhr.send(data);
  };
})();
