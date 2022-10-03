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
  .swiper {
    position: relative;
    height: 200px;
    .imgs-swiper {
      position: relative;
      .pre,
      .next {
        color: #fff;
        cursor: pointer;
        position: absolute;
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 999;
      }
      .pre {
        display: none;
        top: 0;
        left: 0;
      }
      .next {
        display: none;
        top: 0;
        right: 0;
      }
      &:hover {
        .next,
        .pre {
          display: flex;
        }
      }
      .my-img {
        height: 200px !important;
        width: 100%;
        cursor: pointer;
      }
    }
    .dotted-wrapper {
      position: absolute;
      bottom: 10%;
      left: 0;
      right: 0;
      margin: 0 auto;
      width: 30%;
      z-index: 999;
      .dotted-item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        .dotted {
          width: 6px;
          height: 6px;
          background-color: #fff;
          border-radius: 50%;
        }
        .active {
          width: 10px;
          height: 10px;
          background-color: #fff;
        }
      }
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
