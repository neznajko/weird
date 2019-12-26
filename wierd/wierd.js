#!/usr/bin/env node
const fs = require('fs');
// read a program file as a string:
var prog = fs.readFileSync('./wierd.prog').toString();
// get a list of instructions and discard empty elements:
prog = prog.split('\n').filter(Boolean); 
// return [match, subs] from an instruction: <match, subs>
function unpack(inst) {    
    inst = inst.replace(/\s/g, ''); // discard empty spaces
    
    let j = inst.indexOf(',');
    let k = inst.length - 1;
    
    return [inst.substring(1, j), inst.substring(j + 1, k)]
}
const zinst = prog.length;
for (let j = 0; j < zinst; j++) {
    prog[j] = unpack(prog[j]);
}
var nombres = [13, 8];
var str = `${nombres[0]}+${nombres[1]}=?`;
console.log(str);
var match, subs;
// CE7SHE
for (let j = 0; j < zinst; j++) {
    match = prog[j][0];
    if (str.indexOf(match) == -1) continue;
    subs = prog[j][1];
    str = str.split(match).join(subs);
    console.log(j, prog[j], str);
    j = -1;
}
