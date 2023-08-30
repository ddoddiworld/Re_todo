// 상세보기 페이지
import React from 'react'
import { useParams } from 'react-router-dom'
import {data} from "../shared/data"

function Detail() {
  const params = useParams();
  const foundData = data.find((item)=>{
    return item.id === parseInt(params.id);
  })

  return (
    <>
      <p>ID : ${foundData.id}</p>
      <button>이전으로</button>
      {foundData.title}
      {foundData.body}
      {/* isDone은 참고용으로 넣어둠 */}
      {foundData.isDone}
    </>
  )
}

export default Detail