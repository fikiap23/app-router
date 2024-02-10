import React from 'react'
import ProductCard from '../product-card'

type ProductPageProps = {
  params: {
    slug: string[]
  }
}

async function getProduct() {
  const res = await fetch('https://fakestoreapi.com/products')
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  const data = await res.json()
  return data
}

export default async function ProductPage(props: ProductPageProps) {
  const { params } = props
  const product = await getProduct()
  console.log(product)
  // console.log(params)
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {params.slug ? 'DetailProductPage' : 'ProductPage'}
      </h1>
      {product.length > 0 && (
        <div className="grid grid-cols-3 gap-4 place-items-center">
          {product.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
      <h2>{params.slug}</h2>
    </div>
  )
}
