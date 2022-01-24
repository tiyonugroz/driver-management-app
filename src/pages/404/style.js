import styled from 'styled-components';
import WithDirection from '../../settings/withDirection';

const FourZeroFourStyleWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;

  @media only screen and (max-width: 767px) {
    width: 100%;
    flex-direction: column;
    flex-wrap: nowrap;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-direction: column;

    @media only screen and (max-width: 767px) {
      order: 2;
      margin-top: 20px;
      align-items: center;
      text-align: center;
      flex-direction: column;
    }
  }

  .artwork {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 500px;
    margin-left: 100px;

    img {
      max-height: 100%;
    }
  }
`;

export default WithDirection(FourZeroFourStyleWrapper);
