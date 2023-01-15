import styled from "styled-components";

export const StyledHeading = styled.h1`
  min-width: 400px;
  z-index: 100;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  margin-top: 0;
  padding: 10px;
  color: black;
  background-color: lightgreen;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  }
`;
