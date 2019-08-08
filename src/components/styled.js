import styled from 'styled-components';
import { rhythm } from "../utils/typography";

export const Header1 = styled.h1`
  font-size: 2rem;
  line-height: 1.4;
`;

export const Ul = styled.ul`
  margin-top:1em;
  list-style-position: inside;
`;

export const Paragraph = styled.p`
  margin-bottom:0;
`;

export const SocialLink = styled.span`
  margin-right:0.5em;
  color:#333;
  box-shadow:none;
  font-size:1.5rem;
`;

export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  font-family: ${props => props.theme.fontFamily};
`;