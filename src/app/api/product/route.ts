import { NextRequest, NextResponse } from 'next/server'

const data = [
  {
    id: 1,
    title: 'product 1',
    price: 100,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    title: 'product 2',
    price: 200,
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
  {
    id: 3,
    title: 'product 2',
    price: 200,
    image:
      'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
  },
]

export async function GET(req: NextRequest) {
  //   console.log(req)
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id')
  if (id) {
    const detailProduct = data.filter((item) => item.id === parseInt(id))
    if (detailProduct.length === 0) {
      return NextResponse.json({
        status: 404,
        message: 'product not found',
        data: [],
      })
    }
    return NextResponse.json({
      status: 200,
      message: 'success',
      data: detailProduct,
    })
  }
  return NextResponse.json({ status: 200, message: 'success', data })
}
