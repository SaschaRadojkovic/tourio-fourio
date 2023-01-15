import styled from "styled-components";
import Image from "next/image";

export const StyledList = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  z-index: 1;
  position: relative;

  margin-top: 6em;
`;

export const StyledHeader = styled.li`
  margin-bottom: 1em;
  min-width: 200px;
  max-width: 200px;

  text-align: center;

  list-style-type: none;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.3);
  }
`;

export const StyledImage = styled(Image)`
  border-radius: 10px;
`;
