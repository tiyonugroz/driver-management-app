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

export { FormWrapper };
