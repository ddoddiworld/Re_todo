import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, switchTodo } from "../config/modules/todos";
import { Link, useNavigate } from "react-router-dom";

// Working
function WorkBox({todo, isDone}) {
  // hooks
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);

  // 삭제
  const handleRemoveButton = () => dispatch(removeTodo(todos.id));

  // 완료 <-> 진행 중
  const handleSwitchButton = () => {
    dispatch(switchTodo(todos.id));
  };

  // 상세보기
  const handleDetailPageLinkClick = () => {
    navigate(`/${todos.id}`);
  };

  return (
    // [isDone] false: 미완 | true: 완
    <Section>
      <MiniTitle>{isDone ? "Done" : "Working"}</MiniTitle>
        <ListWrap>
          {todos
            .filter((item)=> item.isDone === isDone)
            .map((item)=> {
              return (<List key={item.id}>
                  <TopBox>
                      <RedOne></RedOne>
                      <YellowOne></YellowOne>
                  </TopBox>
                  <ListContent>
                      <ConTitle title={item.title}>{item.title}</ConTitle>
                      <ConContent title={item.body}>{item.body}</ConContent>
                      <Link onClick={handleDetailPageLinkClick}>[상세보기]</Link>
                  </ListContent>
                  <BtnBox>
                      <Button onClick={handleRemoveButton}>🗑️</Button>
                      <Button onClick={handleSwitchButton}>
                        {isDone ?  "↩️" :  "✅"}
                        </Button>
                  </BtnBox>
              </List>)
            })
          }
        </ListWrap>
    </Section>
  );
}

export default WorkBox;

const Section = styled.section`
  margin-top:25px;
`
const MiniTitle = styled.h2`
  font-size:25px;
  letter-spacing:1px;
  padding-bottom:20px;
`
const ListWrap = styled.ul`
  display:flex;
  flex-wrap:wrap;
  gap:15px;
  min-height:253px;
`
const List = styled.li`
  width:calc(96%/4);
  border:2px solid #6a6966;
  background-color: #fff;
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
const ListContent = styled.div`
  padding: 15px;
`
const ConTitle = styled.p`
  font-family: 'Poor Story', cursive;
  min-height:20px;
  font-size:20px;
  margin-bottom:15px;
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
  padding:7px 9px;
  overflow:hidden;
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
  &:hover {
    cursor:pointer;
    transform:scale(1.2);
  }
  &:first-child {
    margin-right:8px;
  }
`