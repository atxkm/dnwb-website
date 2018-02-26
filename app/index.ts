import './css/common.scss';
import './index.scss';

// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// if (/android/i.test(navigator.userAgent.toLowerCase())) {
//   window.location.href = "";
// }

//视频代码
document.querySelector('#openVideoBtn').addEventListener('click', function () {
  document.querySelector('#playVideo').setAttribute('style', 'display: block');
});

document.querySelector('#closeVideo').addEventListener('click', function () {
  document.querySelector('#playVideo').setAttribute('style', 'display: none');
});

//联系我们代码
document.querySelector('#concatBtn').addEventListener('click', function () {
  document.querySelector('#concatUs').setAttribute('style', 'display: block');
});

document.querySelector('#concatUsFloatBtn').addEventListener('click', function () {
  document.querySelector('#concatUs').setAttribute('style', 'display: block');
});

document.querySelector('#closeConcat').addEventListener('click', function () {
  document.querySelector('#concatUs').setAttribute('style', 'display: none');
});

var timers = 0;
document.querySelector('#listBtn').addEventListener('click', function () {
  if (timers++ % 2 == 0) {
    document.querySelector('#list').setAttribute('style', 'display: block');
    document.querySelector('#listBtn').setAttribute('class', 'close-btn');
  } else {
    document.querySelector('#list').setAttribute('style', 'display: none');
    document.querySelector('#listBtn').setAttribute('class', 'btn');
  }
});

window.addEventListener('scroll', function (event) {
  var y = window.scrollY;
  if (y > 1060) {
    document.querySelector('#concatUsFloatBtn').setAttribute('style', 'display: block');
  } else {
    document.querySelector('#concatUsFloatBtn').setAttribute('style', 'display: none');
  }
})