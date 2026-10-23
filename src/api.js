const API_URL = import.meta.env.VITE_API_URL || '/api';

export async function api(path, options = {}) {
  let response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      credentials: 'include',
      headers: {
        ...(options.body ? { 'Content-Type': 'application/json' } : {}),
        ...options.headers
      }
    });
  } catch {
    throw new Error('Could not connect to the server. Make sure the Spring Boot API is running.');
  }

  const contentType = response.headers.get('content-type') || '';
  const result = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  if (!response.ok) {
    const message = typeof result === 'string' ? result : result.message;
    throw new Error(message || 'Something went wrong. Please try again.');
  }
  return result;
}
