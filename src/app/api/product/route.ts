import { NextRequest, NextResponse } from 'next/server'

const data = [
  {
    id: 1,
    name: 'product 1',
    price: 100,
  },
  {
    id: 2,
    name: 'product 2',
    price: 200,
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
