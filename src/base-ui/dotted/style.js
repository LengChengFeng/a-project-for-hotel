import styled from "styled-components";

export const DottedDiv = styled.div`
  overflow: hidden;

  .contents {
    position: relative;
    display: flex;
    transition: transform 250ms ease;
    > * {
      flex-shrink: 0;
    }
  }
`;
