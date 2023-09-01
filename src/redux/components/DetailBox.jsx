// 상세보기 페이지
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import styled from 'styled-components'
import Header from './Header';

function DetailBox() {
  // 다른 컴포넌트로 이동하기 위한 useNavigate
  const navigate = useNavigate();

  // 이전 컴포넌트에서 넘어온 parameter를 조회
  const params = useParams();

  // 이 컴포넌트에서 아이템을 사용하기 위해, params로 전달받은 id를 이용-todo를 filtering
  // 저장소 접근해서 가져온 id, params의 id 일치하는 것만 filter
  const filteredTodo = useSelector((state)=>{
    return state.todos.filter((item) => item.id === params.id);
  });

  // 화면이 최초 렌더링 되는 시점에 올바르지 않은 접근을 차단 (useEffect 사용)
  useEffect(()=>{
    if(filteredTodo.length <= 0 || filteredTodo > 1) {
      alert('올바르지 않은 접근이에요! 😫 메인 페이지로 이동합니다.');
      navigate("/"); // 기존 경로(메인 화면) 강제 이동.
    }
  }, []);

  // todo 객체를 얻어옴(filteredTodos는 무조건 요소가 1개여야 함)
  const todo = filteredTodo[0];
  console.log(todo)

  // 뒤로가기
  const goToMain = () => {
    navigate('/')
  }

  return (
    <DetailBoxWrap>
      <Header></Header>
      <Section>
        <TopBox>
            <RedOne></RedOne>
            <YellowOne></YellowOne>
            <TodoIDInfo>{todo.id}</TodoIDInfo>
        </TopBox>
        <ListContent>
            <ConTitle title={todo.title}>{todo.title}</ConTitle>
            <ConContent title={todo.body}>{todo.body}</ConContent>
        </ListContent>
        <BtnBox>
          <Button onClick={()=>{goToMain()}} title="홈으로 이동">🏠</Button>
        </BtnBox>
      </Section>
    </DetailBoxWrap>
  )
}

export default DetailBox;

const DetailBoxWrap = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 25px;
`
const Section = styled.section`
  background-color: #fff;
  border:2px solid #6a6966;
`
const TopBox = styled.div`
  display:flex;
  align-items: center;
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
const TodoIDInfo = styled.span`
  margin-left:auto; // flex된 상태에서 독단적으로 이동시킬때 사용.
  margin-right:5px;
`
const ListContent = styled.div`
  padding: 20px;
  background-color: #fff;
`
const ConTitle = styled.p`
  font-family: 'Poor Story', cursive;
  min-height:20px;
  font-size:25px;
  margin-bottom:20px;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
`
const ConContent = styled.p`
  font-family: 'Poor Story', cursive;
  height:100px;
  max-height:100px;
  background-color:#eee;
  border-radius:10px;
  padding:10px 12px;
  overflow:hidden;
  font-size:18px;
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