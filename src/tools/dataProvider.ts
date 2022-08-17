export const GET = async (url: string): Promise<Record<string, unknown>> => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
