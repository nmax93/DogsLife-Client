export async function loginRequest(loginDetails) {
  const response = await fetch('http://localhost:5050/login', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(loginDetails),
  });
  return await response.json();
}
