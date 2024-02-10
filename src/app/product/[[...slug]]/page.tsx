import React from 'react'

type DetailProductPageProps = {
  params: {
    slug: string[]
  }
}

export default function DetailProductPage(props: DetailProductPageProps) {
  const { params } = props
  console.log(params)
  return (
    <div>
      <h1>{params.slug ? 'DetailProductPage' : 'ProductPage'}</h1>
      <h2>{params.slug}</h2>
    </div>
  )
}
