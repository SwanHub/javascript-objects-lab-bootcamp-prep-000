var recipes = {
  bakingSoda: "lots",
  cookies: "many"
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
  return object;
}

updateObjectWithKeyAndValue(recipes, "fun", "surprise");

function updateObjectWithKeyAndValue(object, key, value) { 
  Object.assign({}, object, {key: value});
}

updateObjectWithKeyAndValue(recipes, "buns", "galore");


