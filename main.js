function onScanSuccess(qrCodeMessage) {
  document.getElementById('result').innerHTML = `<a class="result" href="${qrCodeMessage}" target="blank">${qrCodeMessage}</a>`;
}
function onScanError(errorMessage) {
  //handle scan error
  console.log(errorMessage);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
  "reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess, onScanError);