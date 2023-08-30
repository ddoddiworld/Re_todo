import React from 'react'
import { Link } from 'react-router-dom'
import { data } from '../shared/data';

function Home() {
  return (
    <div>
      {data.map(item => {
        return (
          <Link to={`/detail/${item.id}`}>{item.todo}이동</Link>
        )
      })}
    </div>
  )
}

export default Home