function myFunction_get() {
  var rs = getComputedStyle(r);
  alert("Value: " + rs.getPropertyValue('--primary-bg-color'));
}
