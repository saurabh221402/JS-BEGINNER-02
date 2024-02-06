function day(x)
{
    switch(x)
    {
        case 0:
            return "SUNDAY";
        case 1:
            return "MONDAY";
        case 2:
            return "TUESDAY";
        case 3:
            return "WEDNWSDAY";
        case 4:
            return "THURSDAY";
        case 5:
            return "FRIDAY";
        default:
            return "SATURDAY";
    }
}

function getMon(num)
    {

      var month;    
      switch(num)
      {
        case 0:
          month="January";
          break;
        case 1:
          month="February";
          break;
        case 2:
          month="March";
          break;
        case 3:
          month="April";
          break;
        case 4:
          month="May";
          break;
        case 5:
          month="June";
          break;
        case 6:
          month="July";
          break;
        case 7:
          month="August";
          break;
        case 8:
          month="September";
          break;
        case 9:
          month="October";
          break;
        case 10:
          month="November";
          break;
        case 11:
          month="December";
          break;
        default:
          month="Invalid month";
      }
      return month;
    }

function load(){
    var curr_data = new Date();

    var dat= document.querySelector('.dat');
    var mon= document.querySelector('.mon');
console.log("k");
    dat.innerHTML = ((curr_data.getDate()<10)?("0"+curr_data.getDate()):curr_data.getDate());
    dat.setAttribute('abc',day(curr_data.getDay()));

    mon.innerHTML = getMon(curr_data.getMonth());
    mon.setAttribute('bcd',curr_data.getFullYear());
}