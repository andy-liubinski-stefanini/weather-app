export async function fetcher(link) {
  const response = await fetch(link);
  const jsonedResponse = await response.json();
  return jsonedResponse;
}
