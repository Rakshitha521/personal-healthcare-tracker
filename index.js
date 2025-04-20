function checkHealth() {
  const weight = parseFloat(document.getElementById("weight").value);
  const age = parseInt(document.getElementById("age").value);
  const sleep = parseFloat(document.getElementById("sleep").value);

  // Basic Validation
  if (!weight || !age || !sleep) {
    document.getElementById("result").textContent = "Please fill in all fields.";
    return;
  }

  // Health Message
  let message = "You're doing great!";

  if (weight > 100) {
    message = "Consider a balanced diet and regular exercise.";
  } else if (sleep < 6) {
    message = "You need more sleep. Aim for at least 6–8 hours.";
  } else if (age > 60 && sleep < 7) {
    message = "Older adults should aim for 7–8 hours of sleep.";
  }

  document.getElementById("result").textContent = message;
}
