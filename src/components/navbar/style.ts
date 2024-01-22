import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #125c13;
  padding: 0 128px;
  height: 3.25rem;

  .navbar-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .navbar-buttons {
    width: 21.25rem;
    display: flex;
    justify-content: space-evenly;

    a {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 5.9375rem;
      height: 2.1875rem;
      color: #fff;
      text-decoration: none;
      font-size: 16px;
      border-radius: 0.3125rem;
      cursor: pointer;
      &:hover {
        background-color: #0c400d;
      }
    }
  }

  .selected-btn {
    background-color: #0c400d;
  }

  @media (max-width: 1440px) {
    padding: 0 40px;
  }

  @media (max-width: 1024px) {
    padding: 0 30px;
  }

  @media (max-width: 768px) {
    padding: 0 30px;
  }

  @media (max-width: 425px) {
    padding: 0 0px;
    img {
      width: 100px;
    }
  }
`;

export default Nav;
