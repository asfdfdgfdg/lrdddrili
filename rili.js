
    var tody=new Date();//获取当前时间
    var year=tody.getFullYear();//获取当前年份
    var month=tody.getMonth()+1;//获取当前月份
    var day=tody.getDate();//获取当前日  
    var month_name = ["一月&nbsp;&nbsp;&nbsp;January","二月&nbsp;&nbsp;&nbsp;Febrary","三月&nbsp;&nbsp;&nbsp;March","四月&nbsp;&nbsp;&nbsp;April",
    "五月&nbsp;&nbsp;&nbsp;May","六月&nbsp;&nbsp;&nbsp;June","七月&nbsp;&nbsp;&nbsp;July","八月&nbsp;&nbsp;&nbsp;Auguest","九月&nbsp;&nbsp;&nbsp;September","十月&nbsp;&nbsp;&nbsp;October",
    "十一月&nbsp;&nbsp;&nbsp;November","十二月&nbsp;&nbsp;&nbsp;December"];
    var picture_1 = ["./节气图/小寒.jpg","./节气图/立春.jpg","./节气图/惊蛰.jpg","./节气图/清明.jpg","./节气图/立夏.jpg","./节气图/芒种.jpg",
    "./节气图/小暑.jpg","./节气图/立秋.jpg","./节气图/白露.jpg","./节气图/寒露.jpg","./节气图/立冬.jpg","./节气图/大雪.jpg",];
    var picture_2 = ["./节气图/大寒.jpg","./节气图/雨水.jpg","./节气图/春分.jpg","./节气图/谷雨.jpg","./节气图/小满.jpg","./节气图/夏至.jpg",
    "./节气图/大暑.jpg","./节气图/处暑.jpg","./节气图/秋分.jpg","./节气图/霜降.jpg","./节气图/小雪.jpg","./节气图/冬至.jpg",];
    function showDate() {
        var week = new Date(year,month-1,1).getDay();//某月第一天是星期几
        var lastEndDay = new Date(year, month - 1, 0).getDate();//某月的上一月的最后一天
        var zhgyue = new Date(year, month, 0).getDate();//某月最后一天
        var lastDateNum = week - 1;
        lastDateNum = week == 0 ? 6 : lastDateNum;
        var prevStartDay = lastEndDay - lastDateNum;
        var nextStartDate = 1;
        var thisday = 1;
        console.log(prevStartDay);
        var tbody = document.querySelector('tbody');
        var cn = -1;
        tbody.innerHTML = '';       
        
        for (var i =0; i < 6; i ++) {
            var tr = document.createElement('tr');
            var td = '';
            for (var j = 0; j < 7 ; j++) {
                // td += '<td></td>'
                cn++;
                ++prevStartDay;
                if (cn < lastDateNum) {
                    td+='<td><div class = "prevMonth">'+ prevStartDay +'</div></td>';}
                else if (cn >= lastDateNum + zhgyue) {
                    td += '<td><div class = "nextMonth">'+nextStartDate+++'</div></td>'
                } else  {
                    td += '<td><div class = "square"><div class = "lisq">'+thisday+++'</div></div></td>'
                }
                tr.innerHTML = td;
            }
            tbody.appendChild(tr);
         }

         var dateW = document.querySelector('.dateWrap');
         var tbod = document.getElementById('.tbod');
        var trs = document.querySelectorAll('tr');
        var tds = document.querySelectorAll('td');
        var prevMonth = document.querySelectorAll('.prevMonth');
        var square = document.querySelectorAll('.square');
        var nextMonth = document.querySelectorAll('.nextMonth');
        var lisq = document.querySelectorAll('.lisq');
        for (var i = 0; i < prevMonth.length; i++) {
          prevMonth[i].onmouseover = function() {
              this.style.backgroundColor = '#c0d9c674';
              this.style.color = '#effaef';
          }
          prevMonth[i].onmouseout = function() {
              this.style.backgroundColor = '';
              this.style.color = '';
          }
          prevMonth[i].onclick = function() {
            document.getElementById("tbod").innerHTML="";
            if(month>1){
                month=month-1;
            }else{
                month=12;
                year=year-1;
            }
            showDate();
            nianyue();
            jieqi();
          }
        }
        for (var i = 0; i < nextMonth.length; i++) {
            nextMonth[i].onmouseover = function() {
              this.style.backgroundColor = '#c0d9c674';
              this.style.color = '#effaef';
            }
            nextMonth[i].onmouseout = function() {
                this.style.backgroundColor = '';
                this.style.color = '';
            }
            nextMonth[i].onclick = function() {
              document.getElementById("tbod").innerHTML="";//先清空day里面的内容
              if(month<12){
                  month=month+1;
              }else{
                  month=1;
                  year=year+1;
              }
              showDate();//再把下个月的月份放到day里
              nianyue();
              jieqi();
            }
          }
        for (var i = 0; i < lisq.length; i++) {
            if (i == day) {
                lisq[i-1].style.color = '#faf5eef5';
                lisq[i-1].style.backgroundColor = '#fa992ae1';
            }
            lisq[i].onclick = function() {
                for (var i = 0; i < square.length; i++) {
                    lisq[i].style.backgroundColor = '';
                    lisq[i].style.color = 'rgb(116, 156, 36)';
                    if (i == day) {
                        lisq[i-1].style.color = '#fa992ae1';
                        lisq[i-1].style.backgroundColor = '';
                    }
                }
                this.className = '.lisq lisqsq';
                this.style.backgroundColor = '#fa992ae0';
                this.style.color = '#faf5eef5';
                this.onmouseout = function() {
                    this.className = 'lisq';
                }
         }
        }
        for (var i = 0; i < square.length; i++) {
          square[i].onmouseover = function() {
              this.style.backgroundColor = '#cde3cadd';
          }
          square[i].onmouseout = function() {
              this.style.backgroundColor = '';
          }
          
          }

    }
  showDate();
 
  function xiaxia() {
      
  }
  function showmonth(){
    var month=tody.getMonth()+1;
    document.getElementById("yue").innerHTML=month_name[month-1];//当前年月赋到页面
    document.getElementById("nian").innerHTML=year;
    document.getElementById("nian").style.fontFamily = 'YouYuan'
    }
    showmonth()

  function nianyue() {
    yue.innerHTML = month_name[month-1];
    nian.innerHTML = year;
    nian.style.fontFamily = 'YouYuan'
    }

    function thisjieqi() {
        document.querySelector('.left').src = picture_1[month - 1];
        document.querySelector('.right').src = picture_2[month - 1];
    }
    thisjieqi()
  function jieqi() {
      left.src = picture_1[month - 1];
      right.src = picture_2[month - 1];
    }
    var dday = document.querySelector('.dday');
    var date = document.querySelector('.date');
    var prev = document.getElementById('prev');
    var next = document.getElementById('next');
    var yue = document.getElementById('yue');
    var nian = document.getElementById('nian');
    var top = document.querySelector('.top');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var year_date = document.querySelector('.year_date');
    var fan = document.querySelector('.year_date').querySelectorAll('.fan');

    function yearDate() {
        for(var i = 0; i < fan.length; i++) {
            fan[i].onmouseover = function() {
                this.style.backgroundColor = '#c0d9c674';
                this.style.color = '#effaef';
              }
              fan[i].onmouseout = function() {
                  this.style.backgroundColor = '';
                  this.style.color = '';
              }
        }
    }
    yearDate();
    next.onclick = function () {
      document.getElementById("tbod").innerHTML="";//先清空day里面的内容
       if(month<12){
           month=month+1;
       }else{
           month=1;
           year=year+1;
       }
       showDate();//再把下个月的月份放到day里
       nianyue();
       jieqi();
    }
    prev.onclick = function() {
        document.getElementById("tbod").innerHTML="";
        if(month>1){
            month=month-1;
        }else{
            month=12;
            year=year-1;
        }
        showDate();
        nianyue();
        jieqi();
    }
    nian.onclick = function() {
        date.style.display = 'none';
        dday.style.display = 'none';
        year_date.style.display = 'block';
    }
  
            fan[0].onclick = function() {
            date.style.display = 'block';
            dday.style.display = 'block';
            year_date.style.display = 'none';
            console.log(11);
                month = 1;
                console.log(month);
                showDate();
                nianyue();
                jieqi();
                console.log(1);
    }
        fan[1].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 2;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[2].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 3;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[3].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 4;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[4].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 5;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[5].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 6;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[6].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 7;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[7].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 8;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[8].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 9;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[9].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 10;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[10].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 11;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }
    fan[11].onclick = function() {
        date.style.display = 'block';
        dday.style.display = 'block';
        year_date.style.display = 'none';
        console.log(11);
            month = 12;
            console.log(month);
            showDate();
            nianyue();
            jieqi();
            console.log(2);
    }


    
           
        
    









