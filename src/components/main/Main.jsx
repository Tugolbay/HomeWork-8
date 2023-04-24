import styles from "styled-components";
import { Window } from "../UI/Window";
import { useState } from "react";
import { createPortal } from "react-dom";
export const Main = ({ elem, onDelete }) => {
  const [openWindow, setOpenWindow] = useState(false);
  function toggleWindowHandler() {
    setOpenWindow((prev) => !prev);
  }
  return (
    <>
      {openWindow &&
        createPortal(
          <Window
            elem={elem}
            onDeleteWindow={onDelete}
            onClick={toggleWindowHandler}
          >
            <Text> Are you definitely want to delete?</Text>
          </Window>,

          document.getElementById("modal")
        )}
      <Content className="main">
        <Title className="title">{elem.title}</Title>
        <Raiting className="raiting">{elem.raiting}/5stars</Raiting>
        <Image className="img" src={elem.link} />
        <Button onClick={toggleWindowHandler} className="delete">
          DELETE
        </Button>
      </Content>
    </>
  );
};

const Content = styles.div`
  display: flex;
  width: 500px;
  height: 120px;
  background-color: white;
  box-shadow: 0 0 10px rgb(0, 0, 0, 0.5);
  border-radius: 15px;
  margin-top: 50px;
  margin-left: 500px;
`;
const Title = styles.div`
position: relative;
top: 20px;
left: 150px;
width: 200px;
font-size: 20px;
`;
const Raiting = styles.div`
width: 50px;
height: 20px;
padding-left: 20px;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 15px;
background-color: orange;
color: white;
font-size: 15px;
position: relative;
top: 60px;
right: 55px;
border-radius: 15px;
`;

const Image = styles.img`
position: relative;
right: 290px;
width: 120px;
height: 123px;
border-radius: 10px 0px 0px 10px;
`;
const Button = styles.button`
position: relative;
padding-left: 15px;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 65px;
top: 63px;
right: 155px;
border-style: none;
width: 70px;
height: 25px;
border-radius: 5px;
background-color: red;
color: white;
`;
const Text = styles.p`
position: relative;
font-size: 18px;
left: 20px;
`;
