import styled from "styled-components";
import background from "./background_image.jpg";

export const Content = styled.main`
  font-family: "Lato", sans-serif;
  background-image: url("${background}");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: grid;
`;
