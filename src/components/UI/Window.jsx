import styled from "styled-components";
export const Window = ({ elem, onClick, children, onDeleteWindow }) => {
  return (
    <Modal>
      <div>{children}</div>
      <Btn1 onClick={onClick}>No</Btn1>
      <Btn2 onClick={() => onDeleteWindow(elem.title)}>Yes</Btn2>
    </Modal>
  );
};

const Modal = styled.div`
  display: flex;
  margin-left: 520px;
  margin-top: -450px;
  width: 450px;
  height: 100px;
  border-radius: 15px;
  background-color: white;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
`;
const Btn1 = styled.button`
  position: absolute;
  top: 280px;
  left: 830px;
  width: 60px;
  height: 40px;
  border-radius: 10px;
  border-style: none;
  color: blue;
  background-color: white;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
`;
const Btn2 = styled.button`
  position: absolute;
  top: 280px;
  left: 900px;
  width: 60px;
  height: 40px;
  border-radius: 10px;
  border-style: none;
  color: white;
  background-color: Blue;
`;
