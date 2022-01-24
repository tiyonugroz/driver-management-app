import styled from "styled-components";
import WithDirection from "../../settings/withDirection";

const LogoWrapper = styled.img`
  float: left;
  width: 120px;
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
    transition: all .3s;
    .anticon {
      color: rgba(0, 0, 0, 0.85);
      margin-right: 12px;
    }
  }
`;

const Profile = WithDirection(ProfileWrapper);

export { Logo, Profile };
