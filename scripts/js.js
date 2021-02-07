const sum_node = document.getElementById("sum");
const avg_node = document.getElementById("avg");
const max_sum_node = document.getElementById("max_sum");
const roll_btn = document.getElementById("roll_btn");

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function roll(x, y, z) {
  console.log("Roll starts");
  let sum = 0;
  let avg = 0;
  let max_sum = 0;
  let max_sum_current = 0;
  console.log("Params: ", sum, avg, max_sum, max_sum_current);
  console.log("For starts");
  for (let i = 0; i < z; i++) {
    console.log("||||||||||||||||||||||||||||");
    console.log("Roll number: ", i + 1);
    for (let j = 0; j < y; j++) {
      console.log("--------------------------");
      console.log("Dice number: ", j + 1);
      let roll_value = getRandomInt(x) + 1;
      console.log("Roll value: ", roll_value);
      sum += roll_value;
      console.log("Sum: ", sum);
      max_sum_current += roll_value;
      console.log("Current sum: ", max_sum_current);
    }
    console.log("Sums comparison: ", max_sum < max_sum_current);
    max_sum < max_sum_current && (max_sum = max_sum_current);
    max_sum_current = 0;
  }
  avg = (sum / (y * z)).toFixed(2);
  console.log("Avg: ", avg);
  console.log("Sum end: ", sum);
  console.log("Max sum end: ", max_sum);
  sum_node.innerHTML = sum;
  avg_node.innerHTML = avg;
  max_sum_node.innerHTML = max_sum + " / " + x * y;
}

roll_btn.onclick = function get_values() {
  let sides = document.getElementById("sides").value;
  let dices = document.getElementById("dices").value;
  let rolls = document.getElementById("rolls").value;

  if (
    sides >= 2 &&
    sides <= 20 &&
    dices >= 1 &&
    dices <= 10 &&
    rolls >= 1 &&
    rolls <= 50
  )
    roll(sides, dices, rolls);
  else alert("Values are not in the given range, try again.");
};
