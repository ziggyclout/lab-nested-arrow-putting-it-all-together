module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};

const createLoginTracker = (userInfo) => {
  let attemptCount = 0;
  let isLocked = false;

const loginAttempt = (enterPassword) => {
  if (isLocked){
    return "Account locked due to too many failed login attempts";
  } attemptCount++;
  if ( attemptCount > 3) {
    isLocked = true;
    return "Account locked due to too many failed login attempts";
  } 
  if (enteredPassword === userInfo.password) {
    return "Login successful";
  } else{
    return 'Login attempt ${attemptCount}: Login failed';
  }
};
return loginAttempt;  
};

const tracker = createLoginTracker({
  username: "user1",
  password: "password123"
});
console.log(tracker("wrong"));
//Login attempt 1: Login failed
console.log(tracker("wrong"));
// Login attempt 2: Login failed
console.log(tracker("wrong"));
// Login attemot 3: Login failed

const tracker2 = createLoginTracker({
  username: "user1",
  password: "password123"
});
console.log(tracker2("password123"));
// Expected: "Login successful"

const tracker3 = createLoginTracker({
  username: "user1",
  password: "password123"
});
console.log(tracker3("wrong"));
// attempt 1
console.log(tracker3("wrong"));
// attempt 2
console.log(tracker3("wrong"));
// attempt 3
console.log(tracker3("password123"));
// Account locked
