import { useAppSelector } from "../redux/hooks";
import { ROLES } from "../global/constants";
import PageNotFound from "./PageNotFound";

// import { authWapperProps } from "../Types/layoutTypes"; --fix

const PermsWrap = (props) => {
  const { adminView, Component } = props;
  const { role } = useAppSelector((store) => store.user.currentUser);

  if (adminView) {
    if (role === ROLES.admin) {
      return <Component />;
    } else {
      return <PageNotFound />;
    }
  }
  return <Component />;
};

export default PermsWrap;
