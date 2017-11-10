// email address is xor encoded with the key "seek"
// can generate the message with the python script
// import itertools
// s = "string_to_encrypt"
// print(list(map(lambda x: x[0] ^ x[1], zip(map(ord, s), itertools.cycle(map(ord, 'seek'))))))


function xor(key, msg) {
  r=[];
  for(var i=0;i<msg.length;i++)
    r.push(key.charCodeAt(i % key.length) ^ msg[i]);
  return String.fromCharCode.apply(0, r)
}