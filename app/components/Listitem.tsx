import React from 'react'
import Link from 'next/link'

type Props = {
     post:BlogPost
}

export default function Listitem({ post }: Props) {
    const {id, title, date } = post
  return (
    <div>Listitem</div>
  )
}