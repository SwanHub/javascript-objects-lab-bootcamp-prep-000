var recipes = {
  bakingSoda: "lots",
}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value;
    return object;
}

updateObjectWithKeyAndValue(recipes, "fun", "surprise");