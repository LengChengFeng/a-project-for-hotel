import styled from "styled-components";

export const EntireRoomListDiv = styled.div`
  padding: 0px 20px;
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    .ant-pagination-item {
      border-radius: 50%;
    }
    .ant-pagination-item-active {
      background: rgb(34, 34, 34) !important;
      border: 0;
    }
    .ant-pagination-item-active a {
      color: #fff;
    }
    .ant-pagination-item-link {
      border: none;
    }
  }
`;
