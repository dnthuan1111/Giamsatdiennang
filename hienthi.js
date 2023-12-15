
const firebaseConfig = {
    apiKey: "AIzaSyDD7gx6O7OcVsMIUjGGhmPFTwq01yOurDE",
    authDomain: "giamsatdiennang-d7210.firebaseapp.com",
    databaseURL: "https://giamsatdiennang-d7210-default-rtdb.firebaseio.com",
    projectId: "giamsatdiennang-d7210",
    storageBucket: "giamsatdiennang-d7210.appspot.com",
    messagingSenderId: "183117916306",
    appId: "1:183117916306:web:fcf3f901e58515ade35e4b",
    measurementId: "G-9Q933YM3S5"
  };

  
firebase.initializeApp(firebaseConfig);

var database = firebase.database();


//lay du dieu tu firebase
database.ref("/Vac").on("value", function(snapshot) {
    var Vac = snapshot.val();
    document.getElementById("FinalRMSVoltageAC").innerHTML = Vac;
    updateVacDateTime();
});
database.ref("/Vdc").on("value", function(snapshot) {
    var Vdc = snapshot.val();
    document.getElementById("finalVoltageDC").innerHTML = Vdc;
    updateVdcDateTime();
});
database.ref("/Iac").on("value", function(snapshot) {
    var Iac = snapshot.val();
    document.getElementById("FinalRMSCurrentAC").innerHTML = Iac;
    updateIacDateTime();
});
database.ref("/Idc").on("value", function(snapshot) {
    var Idc = snapshot.val();
    document.getElementById("finalCurrentDC").innerHTML = Idc;
    updateIdcDateTime();
});
database.ref("/Wdc").on("value", function(snapshot) {
  var Wdc = snapshot.val();
  document.getElementById("finalPowerDC").innerHTML = Wdc;
  updateWdcDateTime();
});
database.ref("/Wac").on("value", function(snapshot) {
  var Wac = snapshot.val();
  document.getElementById("realPowerAC").innerHTML = Wac;
  updateWacDateTime();
});
database.ref("/Netdc").on("value", function(snapshot) {
  var Netdc = snapshot.val();
  document.getElementById("netEnergyDC").innerHTML = Netdc;
  updateNetdcDateTime();
});
database.ref("/Imdc").on("value", function(snapshot) {
  var Imdc = snapshot.val();
  document.getElementById("importEnergyDC").innerHTML = Imdc;
  updateImdcDateTime();
});
database.ref("/Expdc").on("value", function(snapshot) {
  var Expdc = snapshot.val();
  document.getElementById("exportEnergyDC").innerHTML = Expdc;
  updateExpdcDateTime();
});
database.ref("/Appac").on("value", function(snapshot) {
  var Appac = snapshot.val();
  document.getElementById("apparentPowerAC").innerHTML = Appac;
  updateAppacDateTime();
});
database.ref("/Factac").on("value", function(snapshot) {
  var Factac = snapshot.val();
  document.getElementById("powerFactorAC").innerHTML = Factac;
  updateFactacDateTime();
});
database.ref("/Netac").on("value", function(snapshot) {
  var Netac = snapshot.val();
  document.getElementById("netEnergyAC").innerHTML = Netac;
  updateNetacDateTime();
});
database.ref("/Imac").on("value", function(snapshot) {
  var Imac = snapshot.val();
  document.getElementById("importEnergyAC").innerHTML = Imac;
  updateImacDateTime();
});
database.ref("/Expac").on("value", function(snapshot) {
  var Expac = snapshot.val();
  document.getElementById("exportEnergyAC").innerHTML = Expac;
  updateExpacDateTime();
});
database.ref("/Fac").on("value", function(snapshot) {
  var Fac = snapshot.val();
  document.getElementById("frequencyAC").innerHTML = Fac;
  updateFacDateTime();
});




// Lấy ngày và giờ hiện tại
function getCurrentDateTime() {
    var currentDateTime = new Date();
    var date = currentDateTime.toLocaleDateString('en-US');
    var time = currentDateTime.toLocaleTimeString('en-US');
    return { date: date, time: time };
  }
  
  // Cập nhật giá trị ngày và giờ cho thông số Vac
  function updateVacDateTime() {
    var vacDateTime = getCurrentDateTime();
    document.getElementById('vac-date').textContent = vacDateTime.date;
    document.getElementById('vac-time').textContent = vacDateTime.time;
  }
  
  // Cập nhật giá trị ngày và giờ cho thông số Vdc
  function updateVdcDateTime() {
    var vdcDateTime = getCurrentDateTime();
    document.getElementById('vdc-date').textContent = vdcDateTime.date;
    document.getElementById('vdc-time').textContent = vdcDateTime.time;
  }
  
  // Cập nhật giá trị ngày và giờ cho thông số Iac
  function updateIacDateTime() {
    var iacDateTime = getCurrentDateTime();
    document.getElementById('iac-date').textContent = iacDateTime.date;
    document.getElementById('iac-time').textContent = iacDateTime.time;
  }
  
  // Cập nhật giá trị ngày và giờ cho thông số Idc
  function updateIdcDateTime() {
    var idcDateTime = getCurrentDateTime();
    document.getElementById('idc-date').textContent = idcDateTime.date;
    document.getElementById('idc-time').textContent = idcDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Wdc
  function updateWdcDateTime() {
    var wdcDateTime = getCurrentDateTime();
    document.getElementById('wdc-date').textContent = wdcDateTime.date;
    document.getElementById('wdc-time').textContent = wdcDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số wac
  function updateWacDateTime() {
    var wacDateTime = getCurrentDateTime();
    document.getElementById('wac-date').textContent = wacDateTime.date;
    document.getElementById('wac-time').textContent = wacDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Net Energy
  function updateNetdcDateTime() {
    var netdcDateTime = getCurrentDateTime();
    document.getElementById('netdc-date').textContent = netdcDateTime.date;
    document.getElementById('netdc-time').textContent = netdcDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Import Energy
  function updateImdcDateTime() {
    var imdcDateTime = getCurrentDateTime();
    document.getElementById('imdc-date').textContent = imdcDateTime.date;
    document.getElementById('imdc-time').textContent = imdcDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Export Energy
  function updateExpdcDateTime() {
    var expdcDateTime = getCurrentDateTime();
    document.getElementById('expdc-date').textContent = expdcDateTime.date;
    document.getElementById('expdc-time').textContent = expdcDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Apparent Power
  function updateAppacDateTime() {
    var appacDateTime = getCurrentDateTime();
    document.getElementById('appac-date').textContent = appacDateTime.date;
    document.getElementById('appac-time').textContent = appacDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Factor Energy
  function updateFactacDateTime() {
    var factacDateTime = getCurrentDateTime();
    document.getElementById('factac-date').textContent = factacDateTime.date;
    document.getElementById('factac-time').textContent = factacDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Net Energy
  function updateNetacDateTime() {
    var netacDateTime = getCurrentDateTime();
    document.getElementById('netac-date').textContent = netacDateTime.date;
    document.getElementById('netac-time').textContent = netacDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Import Energy
  function updateImacDateTime() {
    var imacDateTime = getCurrentDateTime();
    document.getElementById('imac-date').textContent = imacDateTime.date;
    document.getElementById('imac-time').textContent = imacDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Export Energy
  function updateExpacDateTime() {
    var expacDateTime = getCurrentDateTime();
    document.getElementById('expac-date').textContent = expacDateTime.date;
    document.getElementById('expac-time').textContent = expacDateTime.time;
  }
  // Cập nhật giá trị ngày và giờ cho thông số Frequency
  function updateFacDateTime() {
    var facDateTime = getCurrentDateTime();
    document.getElementById('fac-date').textContent = facDateTime.date;
    document.getElementById('fac-time').textContent = facDateTime.time;
  }

  