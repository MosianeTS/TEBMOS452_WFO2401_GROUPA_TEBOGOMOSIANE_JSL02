const welcomeMessage = () => {
    const today = new Date().toDateString();
    document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
    const workoutInput = document.querySelector('#workoutInput').value;   // Gets workout input value
    const workoutList = document.querySelector('#workoutList');
    const newWorkout = document.createElement('li');
    newWorkout.textContent = workoutInput;
    workoutList.appendChild(newWorkout);                                   //Add new workout to WorkoutList
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);


function addNewGoal () {
    const goalInput = document.querySelector('#goalInput').value;    // Gets goal input value
    const goalList = document.querySelector('#goalList');    
    const goalListItems = document.querySelectorAll('#goalList li');    // Gets all goallist list items
    let isDuplicate = false;           

    function validate (goal) {                                 // Checks whether existing goal is the same as the input value
        if (goal.textContent == goalInput) {              
               isDuplicate = true;
               return;                    
            }    
    }
    goalListItems.forEach(validate)                       // Runs validate function for each goal in the goals list
    
    if (isDuplicate) {      
        alert('Goal already added. Add another one. Please');
        return;                                             // Don't add duplicate goals
    }   
    
    const newGoal = document.createElement('li');
    newGoal.innerHTML = goalInput;
    goalList.appendChild(newGoal);                          //Adds new goal to goal list     
    document.querySelector('#goalInput').value = '';         // Clear input field after adding goal    
  
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);   //Adds new goal when button is clicked

///
let waterIntake = 0;
const updateWaterIntake = (change) => {
    waterIntake += change;
    document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));  
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
    document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
    document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
    document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
    event.preventDefault(); 
    alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);
