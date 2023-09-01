import { useState } from "react";
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../config/modules/todos";

// Title, Content, Id
function InputBox() {
  const dispatch = useDispatch();

  //  저장소
  // const todos = useSelector((state)=> state.todos); // 저장소에 값 접근

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // title의 변경을 감지하는 함수
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  // contents의 변경을 감지하는 함수
  const handleContentsChange = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = () => {
    if (title === '' || body === '') {
      alert("앗! 제목과 내용을 모두 입력해 주세요!");
      return false;
    } else {
      const newTodo = {
        id: Math.random().toString(36).substr(2, 16),
        title,
        body,
        isDone: false,
      }

      dispatch(addTodo(newTodo));
      console.log(newTodo)

      setTitle('');
      setBody('');
    }
  };

  return (
      <Section>
          <TopBox>
              <RedOne></RedOne>
              <YellowOne></YellowOne>
          </TopBox>
          <BodyBox>
              <InputBoxTitle>
                  <MiniTitle>Title</MiniTitle>
                  <InputTitle
                      placeholder="제목을 입력해 주세요."
                      value={title}
                      onChange={handleTitleChange}
                      ></InputTitle>
              </InputBoxTitle>
              <InputBoxContent>
                  <MiniTitle>Content</MiniTitle>
                  <InputTextarea
                      placeholder="내용을 입력해 주세요."
                      value={body}
                      onChange={handleContentsChange}
                  ></InputTextarea>
              </InputBoxContent>
          </BodyBox>
          <BtnBox>
              <Button onClick={onSubmitHandler}>
                  +
              </Button>
          </BtnBox>
      </Section>
  );
}

export default InputBox;

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