import { useState } from "react";
import { NewModal } from "../newModal/NewModal";
import styles from "styled-components";
import { createPortal } from "react-dom";
export const Header = ({ onSubmit }) => {
  const [newModal, setNewModal] = useState(false);

  function openHandler() {
    setNewModal(true);
  }
  function clowsHandler() {
    setNewModal((prev) => !prev);
  }

  return (
    <div>
      <Headers className="header">
        <HeaderText className="header-text">Favorite Movies</HeaderText>
        {newModal ? (
          <NewModal onSubmit={onSubmit} onClick={clowsHandler} />
        ) : (
          []
        )}
        <Button onClick={openHandler} className="header-btn">
          ADD MOVIE
        </Button>
      </Headers>
    </div>
  );
};

const Headers = styles.header`
  display: flex;
  background-color: blue;
  width: 100%;
  height: 60px;
  justify-content: space-between;
`;
const HeaderText = styles.div`
  position: relative;
  top: 15px;
  left: 30px;
  color: white;
  font-size: 20px;
  font-family: Arial, Helvetica, sans-serif;
`;
const Button = styles.button`
  position: relative;
  top: 10px;
  right: 30px;
  width: 120px;
  height: 35px;
  border-radius: 5px;
  border-style: none;
  color: white;
  background-color: rgb(249, 145, 18);
`;
