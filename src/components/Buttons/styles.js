import styled from "styled-components";
import { BsArrowRepeat } from "react-icons/bs";

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.lightPink};
`;
//workin
export const UpdateButtonStyled = styled(BsArrowRepeat)`
  color: ${(props) => props.theme.update};
`;

export const SignupButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-right: 0.5em;
  border-radius: 3px;
  background-color: #a2de96;
  color: #ffffff;
`;

export const SigninButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-right: 0.5em;
  border-radius: 3px;
  background-color: #df5e88;
  color: #ffffff;
`;
