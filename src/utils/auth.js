export function getCurrentUser() {
  return JSON.parse(localStorage.getItem("user")) || null;
}

export function isAdmin() {
  const user = getCurrentUser();
  return user && user.role === "admin";
}

export function logout() {
  localStorage.removeItem("user");
}
