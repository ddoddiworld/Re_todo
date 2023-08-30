// 상세보기 페이지
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {data} from "../shared/data"

function Detail() {
  const params = useParams();
  const foundData = data.find((item)=>{
    return item.id === parseInt(params.id);
  })

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/')
  }

  return (
    <>
      <div>
        <p>ID : {foundData.id}</p>
        <button onClick={()=>{goToMain()}}>이전으로</button>
      </div>

      <div>
        {foundData.title}
        {foundData.body}
        {/* isDone은 참고용으로 넣어둠 */}
        {foundData.isDone}
      </div>
    </>
  )
}

export default Detail