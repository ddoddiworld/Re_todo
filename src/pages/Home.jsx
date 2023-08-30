import React from 'react'
import { Link } from 'react-router-dom';
import { data } from '../shared/data';
import InputBox from '../components/InputBox';
import Header from '../components/Header';
import WorkBox from '../components/WorkBox';
import DoneBox from '../components/DoneBox';

function Home() {
  return (
    <div style={{
      width: "1200px",
      margin: "0 auto",
      padding: "25px",
    }}>
      <Header></Header>
      <InputBox></InputBox>
      <WorkBox></WorkBox>
      <DoneBox></DoneBox>
    </div>
  )
}

export default Home