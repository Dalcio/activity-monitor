import styled from "styled-components";

export const Navside = styled.div`
  width: 30%;
  max-width: 256px;
  float: left;
  height: 100vh;
  text-transform: capitalize;
  background-color: #303440;
  @media screen and (max-width: 760px) {
    width: ${({ width }) => width};
    transition: all 0.5s ease-in-out;
  }
`;

export const Toggle = styled.button`
  background: transparent;
  width: 50px;
  height: 40px;
  border: none;
  display: none;
  font-size: 20px;
  color: #d7d9dc;
  @media screen and (max-width: 760px) {
    display: block !important;
  }
  &:hover {
    background-color: #5c6578;
  }
`;

export const Navlist = styled.div`
  display: block;
  margin-top: 20px;
  height: calc(100vh - 60px);
  @media screen and (max-width: 760px) {
    display: ${({ display }) => display};
    height: calc(100vh - 100px);
  }
  @media screen and (max-height: 500px) {
    overflow-y: scroll;
    &::-webkit-scrollbar {
      max-width: 0.625rem !important;
    }

    &::-webkit-scrollbar-track {
      background: #2a2a2b !important;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #7d7d7e !important;
    }
  }
`;

export const NavItem = styled.li`
  width: 100%;
  height: 40px;
  list-style: none;
  line-height: 40px;
  padding-left: 20px;
  color: #f5f5f5;
  &:hover {
    background-color: #5c6578;
  }
  #ico {
    font-size: 20px;
    margin: -5px 10px 0 0;
  }
`;

export const NavHeader = styled.li`
  height: 40px;
  list-style: none;
  line-height: 40px;
  padding-left: 10px;
  color: #c8c8c8;
`;

export const NavFooter = styled.li`
  display: block;
  @media screen and (max-width: 760px) {
    display: ${({ display }) => display};
  }
  width: 100%;
  height: 40px;
  bottom: 0 !important;
  list-style: none;
  line-height: 40px;
  padding-left: 20px;
  color: #f5f5f5;
  &:hover {
    background-color: #5c6578;
  }

  #ico {
    font-size: 20px;
    margin: -5px 10px 0 0;
  }
`;
