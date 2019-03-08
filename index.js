var recipes = {
  bakingSoda: "lots",
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectNew(object, key, value) {
var clone = Object.assign({}, object, {key: value});
return clone
}

updateObjectNew(recipes, "fun", "fetti");

recipes[fun];
