function login(username, password) {
  if (username && password) {
    return "Login successful";
  }

  return "Invalid credentials";
}

console.log(login("admin", "12345"));
