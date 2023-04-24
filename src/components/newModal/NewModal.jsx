import styled from "styled-components";
import { useRef } from "react";
export const NewModal = ({ onSubmit, onClick }) => {
  const inputTextUseRef = useRef();
  const inputRatingUseRef = useRef();
  const inputLinkUseRef = useRef();

  function submitHandler() {
    const data = {
      title: inputTextUseRef.current.value,
      raiting: inputRatingUseRef.current.value,
      link: inputLinkUseRef.current.value,
    };
    onSubmit(data);
    inputTextUseRef.current.value = "";
    inputRatingUseRef.current.value = "";
    inputLinkUseRef.current.value = "";
  }
  return (
    <Modal>
      <Text1>Movie Title</Text1>
      <Inputs1 ref={inputTextUseRef} className="input1" />
      <Text2>Your Raiting</Text2>
      <Inputs2 ref={inputRatingUseRef} className="input2" />
      <Text3>Image Link</Text3>
      <Inputs3 ref={inputLinkUseRef} className="input3" />
      <Button1 onClick={onClick} className="cancel">
        Cancel
      </Button1>
      <Button2 onClick={submitHandler} className="add">
        Add
      </Button2>
    </Modal>
  );
};

const Button1 = styled.button`
  width: 95px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(0, 213, 255);
  border-style: none;
  color: white;
  margin-top: 290px;
  margin-left: -890px;
`;
const Button2 = styled.button`
  width: 85px;
  height: 50px;
  border-radius: 10px;
  background-color: rgb(0, 42, 255);
  color: white;
  border-style: none;
  margin-top: 290px;
  margin-left: 20px;
`;
const Text1 = styled.p`
  position: absolute;
  width: 200px;
  font-size: 18px;
  left: 580px;
`;
const Text2 = styled.p`
  position: absolute;
  width: 200px;
  font-size: 18px;
  top: 240px;
  left: 580px;
`;
const Text3 = styled.p`
  position: absolute;
  width: 200px;
  font-size: 18px;
  top: 320px;
  left: 580px;
`;
const Modal = styled.div`
  display: flex;
  width: 400px;
  height: 350px;
  background-color: white;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
  border-radius: 15px;
  margin-top: 160px;
  margin-left: 50px;
  z-index: -1;
`;

const Inputs1 = styled.input`
  position: relative;
  top: 50px;
  left: 23px;
  width: 350px;
  height: 30px;
  border-style: none;
  border: 1px solid blue;
`;
const Inputs2 = styled.input`
  position: relative;
  top: 130px;
  right: 333.5px;
  width: 350px;
  height: 30px;
  border-style: none;
  border: 1px solid blue;
`;
const Inputs3 = styled.input`
  position: relative;
  top: 210px;
  right: 690px;
  width: 350px;
  height: 30px;
  border-style: none;
  border: 1px solid blue;
`;
