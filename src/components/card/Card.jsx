import { Main } from "../main/Main";
import styled from "styled-components";

export const Card = ({ movie, onDelete }) => {
  return (
    <Cards>
      {movie.map((el) => {
        return <Main elem={el} onDelete={onDelete} key={el.title} />;
      })}
    </Cards>
  );
};

const Cards = styled.div`
  margin-top: 500px;
`;
