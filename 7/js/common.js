function createHolder(x) {
  let result = {
    value: x,
    getValue: function() { return this.value; },
    setValue: function(y) { this.value = y; }
  };

  return result;
  
}

let obj = createHolder(5);
console.log(obj.getValue());