import styled from "styled-components";

export const SectionTabsDiv = styled.div`
  margin-top: 30px;
  margin-bottom: 10px;

  .item {
    box-sizing: border-box;
    flex-basis: 120px;
    flex-shrink: 0;
    padding: 8px 10px;
    margin-right: 16px;
    border-radius: 3px;
    font-size: 17px;
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
`;
