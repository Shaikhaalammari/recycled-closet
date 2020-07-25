import styled from "styled-components";
import { BsArrowRepeat } from "react-icons/bs";

export const DeleteButtonStyled = styled.p`
  color: ${(props) => props.theme.lightPink};
`;
//workin
export const UpdateButtonStyled = styled(BsArrowRepeat)`
  color: ${(props) => props.theme.update};
`;
