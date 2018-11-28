import Link from "next/link";
import styled from "styled-components";
import User from "./user/User";
import Signout from "./user/Signout";

const NavStyles = styled.ul`
  display: flex;
  margin: 1rem 0;
  padding: 0;

  a,
  button {
    padding: 1rem;
    font-size: 1rem;
    line-height: 1rem;
    color: ${props => props.theme.blue};

    &:hover {
      color: ${props => props.theme.blueHover};
    }
  }
  button {
    margin: 0;
    padding: 0;
    background: none;
    border: 0;
  }
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/learn">
          <a>Learn</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        {me && (
          <>
            <Link href="/me">
              <a>Account</a>
            </Link>
            <Signout />
          </>
        )}
        {!me && (
          <>
            <Link href="/signup">
              <a>Sign up</a>
            </Link>
            <Link href="/signin">
              <a>Sign in</a>
            </Link>
          </>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
