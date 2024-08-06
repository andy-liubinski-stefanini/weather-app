export async function baseQuery(link) {
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const jsonedResponse = await response.json();
  return jsonedResponse;
}
