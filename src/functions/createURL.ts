export function createURL(endpointType: string, urlParams): string {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const apiKey = import.meta.env.VITE_API_KEY;
  const url = new URL(`${endpointType}`, baseURL);

  for (const key in urlParams) {
    url.searchParams.append(key, urlParams[key]);
  }
  url.searchParams.append('key', apiKey);
  return url.toString();
}
