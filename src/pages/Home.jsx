import React from 'react'
import Header from '../redux/components/Header';
import InputBox from '../redux/components/InputBox';
import WorkBox from '../redux/components/WorkBox';

function Home() {
  return (
    <div style={{
      width: "1200px",
      margin: "0 auto",
      padding: "25px",
    }}>
      <Header></Header>
      <InputBox></InputBox>
      <WorkBox isDone={false}></WorkBox>
      <WorkBox isDone={true}></WorkBox>
    </div>
  )
}

export default Home