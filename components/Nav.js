import Link from "next/link";
import styled from "styled-components";
import User from "./User";
// import Signout from "./Signout";

const NavStyles = styled.ul`
  display: flex;
`;

const Nav = () => (
  <User>
    {({ data: { me } }) => (
      <NavStyles>
        <Link href="/items">
          <a>Signup</a>
        </Link>
        {me && (
          <>
            <Link href="/sell">
              <a>Sell</a>
            </Link>
            <Link href="/orders">
              <a>Orders</a>
            </Link>
            <Link href="/me">
              <a>Account</a>
            </Link>
            {/* <Signout /> */}
          </>
        )}
        {!me && (
          <Link href="/signup">
            <a>Sign in</a>
          </Link>
        )}
      </NavStyles>
    )}
  </User>
);

export default Nav;
