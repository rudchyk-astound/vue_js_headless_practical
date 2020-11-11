export default async function getRequest<T>(request: string): Promise<object> {
  const response = await fetch(request)
  const json = await response.json()
  return json.products
}
