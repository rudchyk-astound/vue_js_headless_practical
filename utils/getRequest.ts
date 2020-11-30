interface Products {
  products: Array<object>
}

export default async function getRequest<T>(request: string): Promise<object> {
  const response: any = await fetch(request)
  const json: Products = await response.json()
  return json.products
}
