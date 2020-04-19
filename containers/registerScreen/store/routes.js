export async function registerRequest(registerDetails) {
  const response = await fetch('http://localhost:5050/register', {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(registerDetails),
  });
  return await response.json();
}
