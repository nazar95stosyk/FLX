function formatTime(totalTime) {
    let a = 24;
    let b = 60;
    let d = Math.floor(totalTime / (a * b));
    let h = Math.floor((totalTime % (a * b)) / b);
    let m = Math.floor((totalTime % (a * b)) % b);
    
    return (d + `  day(s)  ` + h + `  hour(s)  ` + m + `  minute(s).  `);
  }
  formatTime(120);
  formatTime(59);
  formatTime(3601);