import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const Logo = styled.h1`
  font-size: 4rem;
  margin: 0;

  a {
    text-decoration: none;
  }
`;

const StyledHeader = styled.header`
  border-bottom: 5px solid ${props => props.theme.black};
  padding: 1rem 2rem;
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>Flipper</a>
      </Link>
    </Logo>
    <Nav />
  </StyledHeader>
);

export default Header;
