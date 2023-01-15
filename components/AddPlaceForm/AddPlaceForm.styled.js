import styled from "styled-components";
import Link from "next/link";

export const FormWrapper = styled.form`
  padding: 1em;
  margin-top: 7em;
  display: grid;
`;
//back to card list Link
export const StyledLink2 = styled(Link)`
  z-index: 4;
  padding-left: 0.7em;
  padding-right: 0.7em;
  margin-top: -32.5em;
  margin-left: -2em;
  min-width: 2em;
  position: fixed;
  border: 0.5px solid grey;
  text-decoration: none;
  border-radius: 5px;
  background-color: rgb(202, 238, 194);
  color: darkgrey;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  transition: background-color 1s ease, box-shadow 0.3s ease, color 1s ease;
  &:hover {
    background-color: rgb(144, 238, 145);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
    color: black;
  }
`;
//add a new place link
export const StyledLink1 = styled(Link)`
  z-index: 4;
  padding-left: 0.7em;
  padding-right: 0.7em;
  margin-left: 14em;
  margin-top: 25em;
  min-width: 3em;

  position: fixed;

  text-decoration: none;
  border-radius: 5px;
  background-color: rgb(202, 238, 194);
  color: darkgrey;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);

  cursor: pointer;
  transition: background-color 1s ease, box-shadow 0.3s ease, color 1s ease;
  &:hover {
    background-color: rgb(144, 238, 145);
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
    color: black;
  }
`;
