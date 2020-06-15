import styled from "styled-components";

export const Table = styled.div`
  border: 1px solid #c0c0c0;
  border-radius: 5px !important;
  background-color: #282a2a;
  margin-bottom: 20px;
  @media screen and (max-height: 500px) {
    font-size: 80%
  }
`;

export const TableGroup = styled.div`
  width: calc(50%);
  display: inline-block;
  &:first-child {
    border-right: 1px solid #c0c0c0;
    margin: 10px 0;
    padding: 0 10px;
  }
  &:last-child {
    margin: 10px 0;
    padding: 0 10px;
  }
`;

export const TableLinha = styled.div`
  text-align: right;
  padding: 10px 0;
  div {
    display: inline-block;
  }
  & div:first-child {
    text-transform: capitalize;
    float: left !important;
  }
  &:last-child {
    padding-bottom: 0;
  }
  border-bottom: ${({ last }) => (!last ? "1px solid #c0c0c0" : null)};
  &:hover {
    background-color: #5c6578;
    cursor: default;
  }
`;
