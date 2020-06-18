module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement !== 20) {
    return item.enhancement + 1
  } else {
    return item.enhancement
  }
}

function fail(item) {
  if (item.enhancement < 15) {
    item.durability = item.durability - 5
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    item.durability = item.durability - 10
  } else if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1
    item.durability = item.durability - 10
  }
  return item
}

function repair(item) {
  let diff = 0
  if (item.durability === 100) {
    return item.durability
  } else {
    diff = 100 - item.durability
  }
  return diff + item.durability
}

function get(item) {
  if (item.enhancement > 0) {
    let levels = item.enhancement
    item.name = `[+${levels}]` + item.name
  }
  return item
}
