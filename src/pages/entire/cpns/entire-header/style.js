import styled from "styled-components";

export const EntireHeaderDiv = styled.div`
  .tabs {
    padding: 10px;
    display: flex;
    .tabs-item {
      box-sizing: border-box;
      flex-basis: 120px;
      flex-shrink: 0;
      padding: 4px 6px;
      margin-right: 16px;
      border-radius: 3px;
      font-size: 14px;
      text-align: center;
      border: 0.5px solid #d8d8d8;
      white-space: nowrap;
      cursor: pointer;
      ${(props) => props.theme.mixin.boxShadow};
      &:last-child {
        margin-right: 0;
      }

      &.active {
        color: #fff;
        background-color: ${(props) => props.theme.color.secondaryColor};
      }
    }
  }
`;
