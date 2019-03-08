var recipes = {
  bakingSoda: "lots",
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

function updateObjectWithKeyAndValue(object, key, value) {
var clone = Object.assign({}, object, {[key]: value});
return clone;
}

updateObjectWithKeyAndValue(recipes, "fun", "fetti");

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  Object.assign(object, {[key]: value});
  return object;
}
