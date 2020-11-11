import products from '../data/products.json'

export default function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.statusCode = 200
  res.end(JSON.stringify(products))
}
