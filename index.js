var recipes = {
  bakingSoda: "lots",
  cookies: "many"
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object;
}

updateObjectWithKeyAndValue(recipes, "fun", "surprise");

function updateObjectNew(object, key, value) {
Object.assign({}, object, {key: value});
}