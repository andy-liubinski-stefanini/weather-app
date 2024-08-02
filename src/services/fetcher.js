export async function fetchData(link) {
  const response = await fetch(link);
  const jsonedResponse = await response.json();
  return jsonedResponse;
}
