// email address is xor encoded with the key "seek"
function xor(key, msg) {
  r=[];
  for(var i=0;i<msg.length;i++)
    r.push(key.charCodeAt(i % key.length) ^ msg[i]);     
  return String.fromCharCode.apply(0, r)
}