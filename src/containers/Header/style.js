import styled from "styled-components";
import WithDirection from "../../settings/withDirection";

const HamburgerWrapper = styled.div`
  float: left;
  width: 24px;
  height: 20px;
  margin: 20px 24px 20px 0;
  cursor: pointer;

  img {
    display: block;
  }
`;

const Menu = WithDirection(HamburgerWrapper);

const LogoWrapper = styled.img`
  float: left;
  height: 31px;
  margin: 16px 24px 16px 0;
`;

const Logo = WithDirection(LogoWrapper);

const ProfileWrapper = styled.div`
  display: flex;
  float: right;
  height: 100%;
  margin-left: auto;
  overflow: hidden;

  .profile-trigger {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 12px;
    cursor: pointer;
    transition: all 0.3s;
    .anticon {
      color: rgba(0, 0, 0, 0.85);
      margin-right: 12px;

      .ant-typography {
        color: #f04a41;
      }
    }
  }
`;

const Profile = WithDirection(ProfileWrapper);

export { Menu, Logo, Profile };
