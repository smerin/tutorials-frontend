import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 5px solid ${props => props.theme.black};
  padding: 1rem 2rem;
`;

const Logo = styled.h1`
  margin: 0;
  font-size: 2rem;
  line-height: 1rem;

  a {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo>
      <Link href="/">
        <a>Logo</a>
      </Link>
    </Logo>
    <Nav />
  </StyledHeader>
);

export default Header;
