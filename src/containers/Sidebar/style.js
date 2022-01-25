import styled from "styled-components";
import WithDirection from "../../settings/withDirection";

const Wrapper = styled.div`
  margin-top: 24px;

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: inherit;
  }
  .ant-menu-item-selected a:before {
    border-left: 3px solid #f04a41;
  }

  .ant-menu-item {
    width: 100%;

    &:after {
      border-right: 0;
    }
  }
`;

const MenuWrapper = WithDirection(Wrapper);

export { MenuWrapper };
