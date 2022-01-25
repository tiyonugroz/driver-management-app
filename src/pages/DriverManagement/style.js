import styled from "styled-components";
import WithDirection from "../../settings/withDirection";

const Form = styled.div`
  margin-bottom: 24px;
  h4 {
    color: #f04a41;
    margin-bottom: 0;
  }
`;

const FormWrapper = WithDirection(Form);

const List = styled.div`
  & .ant-card-head-title {
    & span > span {
      color: #f04a41;
    }
  }

  & .ant-avatar {
    margin-bottom: 20px;
  }

  & .ant-typography {
    margin-bottom: 8px;
  }
`;

const ListWrapper = WithDirection(List);

const LabelWrapper = styled.div`
  color: rgba(0, 0, 0, 0.45);
  font-size: 12px;
  line-height: 10px;
`;

const Label = WithDirection(LabelWrapper);

const PaginationWrapper = styled.div`
  margin: 20px 0;
  text-align: center;

  & button {
    font-weight: bold;
    color: rgba(0, 0, 0, 0.85);;
  }
`;

const Pagination = WithDirection(PaginationWrapper);

export { FormWrapper, ListWrapper, Label, Pagination };
