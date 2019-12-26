const prog = ['<%0,0%>',
	      '<%1,1%>',
	      '<%2,2%>',
	      '<%3,3%>',
	      '<%4,4%>',
	      '<%5,5%>',
	      '<%6,6%>',
	      '<%7,7%>',
	      '<%8,8%>',
	      '<%9,9%>',
	      '<%?,?#>',
	      '<A0,0A>',
	      '<A1,1A>',
	      '<A2,2A>',
	      '<A3,3A>',
	      '<A4,4A>',
	      '<A5,5A>',
	      '<A6,6A>',
	      '<A7,7A>',
	      '<A8,8A>',
	      '<A9,9A>',
	      '<B0,0B>',
	      '<B1,1B>',
	      '<B2,2B>',
	      '<B3,3B>',
	      '<B4,4B>',
	      '<B5,5B>',
	      '<B6,6B>',
	      '<B7,7B>',
	      '<B8,8B>',
	      '<B9,9B>',
	      '<C0,0C>',
	      '<C1,1C>',
	      '<C2,2C>',
	      '<C3,3C>',
	      '<C4,4C>',
	      '<C5,5C>',
	      '<C6,6C>',
	      '<C7,7C>',
	      '<C8,8C>',
	      '<C9,9C>',
	      '<D0,0D>',
	      '<D1,1D>',
	      '<D2,2D>',
	      '<D3,3D>',
	      '<D4,4D>',
	      '<D5,5D>',
	      '<D6,6D>',
	      '<D7,7D>',
	      '<D8,8D>',
	      '<D9,9D>',
	      '<E0,0E>',
	      '<E1,1E>',
	      '<E2,2E>',
	      '<E3,3E>',
	      '<E4,4E>',
	      '<E5,5E>',
	      '<E6,6E>',
	      '<E7,7E>',
	      '<E8,8E>',
	      '<E9,9E>',
	      '<F0,0F>',
	      '<F1,1F>',
	      '<F2,2F>',
	      '<F3,3F>',
	      '<F4,4F>',
	      '<F5,5F>',
	      '<F6,6F>',
	      '<F7,7F>',
	      '<F8,8F>',
	      '<F9,9F>',
	      '<G0,0G>',
	      '<G1,1G>',
	      '<G2,2G>',
	      '<G3,3G>',
	      '<G4,4G>',
	      '<G5,5G>',
	      '<G6,6G>',
	      '<G7,7G>',
	      '<G8,8G>',
	      '<G9,9G>',
	      '<H0,0H>',
	      '<H1,1H>',
	      '<H2,2H>',
	      '<H3,3H>',
	      '<H4,4H>',
	      '<H5,5H>',
	      '<H6,6H>',
	      '<H7,7H>',
	      '<H8,8H>',
	      '<H9,9H>',
	      '<I0,0I>',
	      '<I1,1I>',
	      '<I2,2I>',
	      '<I3,3I>',
	      '<I4,4I>',
	      '<I5,5I>',
	      '<I6,6I>',
	      '<I7,7I>',
	      '<I8,8I>',
	      '<I9,9I>',
	      '<J0,0J>',
	      '<J1,1J>',
	      '<J2,2J>',
	      '<J3,3J>',
	      '<J4,4J>',
	      '<J5,5J>',
	      '<J6,6J>',
	      '<J7,7J>',
	      '<J8,8J>',
	      '<J9,9J>',
	      '<A?,?0>',
	      '<B?,?1>',
	      '<C?,?2>',
	      '<D?,?3>',
	      '<E?,?4>',
	      '<F?,?5>',
	      '<G?,?6>',
	      '<H?,?7>',
	      '<I?,?8>',
	      '<J?,?9>',
	      '<A+,+A>',
	      '<B+,+B>',
	      '<C+,+C>',
	      '<D+,+D>',
	      '<E+,+E>',
	      '<F+,+F>',
	      '<G+,+G>',
	      '<H+,+H>',
	      '<I+,+I>',
	      '<J+,+J>',
	      '<0t,t0A>',
	      '<1t,t1B>',
	      '<2t,t2C>',
	      '<3t,t3D>',
	      '<4t,t4E>',
	      '<5t,t5F>',
	      '<6t,t6G>',
	      '<7t,t7H>',
	      '<8t,t8I>',
	      '<9t,t9J>',
	      '<+t,t+%>',
	      '<0=?,t0?0$>',
	      '<1=?,t1?1$>',
	      '<2=?,t2?2$>',
	      '<3=?,t3?3$>',
	      '<4=?,t4?4$>',
	      '<5=?,t5?5$>',
	      '<6=?,t6?6$>',
	      '<7=?,t7?7$>',
	      '<8=?,t8?8$>',
	      '<9=?,t9?9$>',
	      '<t,>',
	      '<#0,#>',
	      '<#$,>',
	      '<1b,0>',
	      '<2b,1>',
	      '<3b,2>',
	      '<4b,3>',
	      '<5b,4>',
	      '<6b,5>',
	      '<7b,6>',
	      '<8b,7>',
	      '<9b,8>',
	      '<0b,b9>',
	      '<1$,0$#>',
	      '<2$,1$#>',
	      '<3$,2$#>',
	      '<4$,3$#>',
	      '<5$,4$#>',
	      '<6$,5$#>',
	      '<7$,6$#>',
	      '<8$,7$#>',
	      '<9$,8$#>',
	      '<0$,b9$#>',
	      '<0c,1>',
	      '<1c,2>',
	      '<2c,3>',
	      '<3c,4>',
	      '<4c,5>',
	      '<5c,6>',
	      '<6c,7>',
	      '<7c,8>',
	      '<8c,9>',
	      '<9c,c0>',
	      '<?c,?1>',
	      '<0#,1>',
	      '<1#,2>',
	      '<2#,3>',
	      '<3#,4>',
	      '<4#,5>',
	      '<5#,6>',
	      '<6#,7>',
	      '<7#,8>',
	      '<8#,9>',
	      '<9#,c0>',
	      '<?,=>'];
const zinst = prog.length;
function unpack(inst) {    
    let j = inst.indexOf(',');
    let k = inst.length - 1;
    return [inst.substring(1, j), inst.substring(j + 1, k)]
}
function showprog() {
    if (showprog.flag) return;
    let tbody = document.getElementById("prog");
    let row, cell;
    for (let j = 0; j < zinst; j++) {
	row = tbody.insertRow(j);
	cell_nmbr = row.insertCell(0);
	cell_inst = row.insertCell(1);
	cell_nmbr.textContent = `${j+1}`;
	cell_inst.textContent = prog[j];
    }
    showprog.flag = true;
}
function mafunc() {
    let uprog = [];
    for (let j = 0; j < zinst; j++) {
	uprog[j] = unpack(prog[j]);
    }
    let m = document.getElementsByName("m")[0].value;
    let n = document.getElementsByName("n")[0].value;
    let str = `${m}+${n}=?`;
    document.getElementById("str").innerHTML = str;
    console.log(str);
    let match, subs;
    // CE7SHE
    let tbody = document.getElementById("dump");
    let row, cell;
    tbody.innerHTML = '';
    let cntr = 0;
    for (let j = 0; j < zinst; j++) {
	                 match = uprog[j][0];
	if (str.indexOf(match) == -1) continue;
	                  subs = uprog[j][1];
	                   str = str.split(match).join(subs);
	console.log(j, prog[j], str);
                           row = tbody.insertRow(cntr++);
                     cell_nmbr = row.insertCell(0);
                    cell_match = row.insertCell(1);
                     cell_subs = row.insertCell(2);
                      cell_str = row.insertCell(3);
	 cell_nmbr.textContent = `${j}`;
	cell_match.textContent = match;
	 cell_subs.textContent = subs;
	  cell_str.textContent = str;
	                     j = -1;
    }
}
