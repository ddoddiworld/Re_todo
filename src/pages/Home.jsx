import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
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


      {/* <div>
        {data.map(item => {
          return (
            <Link to={`/detail/${item.id}`}>{item.todo}이동</Link>
          )
        })}
      </div> */}
    </div>
  )
}

export default Home

// header
const Title = styled.h1 `
  font-size:40px;
  text-align:center;
  font-weight:bold;
  padding-bottom:20px;
  letter-spacing:2px;
  font-family: 'Roboto', sans-serif;
`

// add
const Section = styled.section `
  background-color: #fff;
  border:2px solid #6a6966;
`
const TopBox = styled.div`
  display:flex;
  padding:7px 0 7px 5px;
  border-bottom:2px solid #6a6966;
  background-color: #c5c5c5;
`
const RedOne = styled.span`
  margin:0 2px;
  display:block;
  width:18px;
  height:18px;
  background-color:#f94d3f;
  border-radius:50%;
  border:1px solid #92776c;
`
const YellowOne = styled.span`
  margin:0 2px;
  display:block;
  width:18px;
  height:18px;
  background-color:#f7d08e;
  border-radius:50%;
  border:1px solid #92776c;
`
const BodyBox = styled.div`
  padding:15px;
`
const InputBoxTitle = styled.div`
  display:flex;
  margin-bottom:20px;
`
const MiniTitle = styled.p`
  font-size:20px;
  width:95px;
  letter-spacing:1px;
`
const InputTitle = styled.input`
  border-bottom:1px solid #6a6966;
  width:100%;
  padding-left:10px;
  font-size:20px;
  padding-bottom:3px;
  font-family: 'Poor Story', cursive;
  &:focus {outline:none}
`
const InputBoxContent = styled.div`
    display:flex;
`
const InputTextarea = styled.textarea`
  resize:none;
  background-color:#eee;
  width:100%;
  height:100px;
  border-radius:10px;
  padding:5px 10px;
  font-size:15px;
  font-family: 'Poor Story', cursive;
  &:focus {outline:none}
`
const BtnBox = styled.div`
  display:block;
  text-align:right;
  padding:10px;
`
const Button = styled.button`
  border:1px solid #6a6966;
  height:30px;
  width:30px;
  &:hover{
    cursor:pointer;
    transform:scale(1.2);
  }
`