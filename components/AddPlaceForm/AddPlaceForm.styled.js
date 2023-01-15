import styled from "styled-components";
import Link from "next/link";

export const FormWrapper = styled.form`
  padding: 1em;
  margin-top: 7em;
  display: grid;
`;
//back to card list Link
export const StyledLink2 = styled(Link)`
  z-index: 100;
  padding-left: 0.7em;
  padding-right: 0.7em;
  margin-top: -32.5em;
  margin-left: -2em;

  text-decoration: none;
  border-radius: 5px;
  background-color: lightgreen;
  color: black;

  position: fixed;
  cursor: pointer;
  transition: background-color 1s ease;
  &:hover {
    background-color: green;
    color: white;
  }
`;
//add a new place link
export const StyledLink1 = styled(Link)`
  margin-top: 4em;
  z-index: 4;
  position: fixed;
  padding-left: 0.7em;
  padding-right: 0.7em;

  text-decoration: none;
  border-radius: 5px;
  background-color: lightgreen;
  color: black;

  cursor: pointer;
  transition: background-color 1s ease;
  &:hover {
    background-color: green;
    color: white;
  }
`;
