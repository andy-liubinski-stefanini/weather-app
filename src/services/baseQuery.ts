export async function baseQuery<T>(link: string): Promise<T> {
  const response = await fetch(link);
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const jsonedResponse: T = await response.json();
  return jsonedResponse;
}
