Date.prototype.format = function (str) {
  if (!str || !this.valueOf()) return;

  let weekName = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
  let d = this;

  return str.replace(/(YYYY|YY|MM|DD|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "YYYY":
        return d.getFullYear();
      case "YY":
        return (d.getFullYear() % 1000);
      case "MM":
        return (d.getMonth() + 1) < 10 ? "0" + (d.getMonth() + 1) : (d.getMonth() + 1);
      case "DD":
        return (d.getDate() < 10) ? "0" + d.getDate() : d.getDate()
      case "E":
        return weekName[d.getDay()];
      case "HH":
        return d.getHours();
      case "hh":
        return (d.getHours() % 12) ? (d.getHours() % 12) : 12;
      case "mm":
        return d.getMinutes();
      case "ss":
        return d.getSeconds();
      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후";
      default:
        return $1;
    }
  });
}