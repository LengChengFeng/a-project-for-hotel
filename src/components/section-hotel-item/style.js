import styled from "styled-components";

export const SelectionHotelItemDiv = styled.div`
  width: ${(props) => props.itemWidth};
  flex-shrink: 0;
  box-sizing: border-box;
  padding: 8px;
  .img-cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;
    cursor: pointer;
    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }
  .type {
    margin-top: 10px;
    font-size: 12px;
    color: #585a3a;
  }
  .desc {
    margin-top: 10px;
    color: ${(props) => props.theme.text.primaryColor};
    font-weight: 800;
    font-size: 14px;
    padding-right: 20px;
  }
  .price {
    margin-top: 10px;
    color: ${(props) => props.theme.text.primaryColor};
    font-size: 14px;
  }
  .rate {
    display: flex;
    align-items: center;
    font-size: 12px;
    font-weight: 600;
    color: ${(props) => props.theme.text.primaryColor};

    .text {
      padding-top: 2px;
      .count {
        margin: 0 2px 0 4px;
      }
    }
  }
  .ant-rate-star {
    margin-right: 0;
  }
`;
