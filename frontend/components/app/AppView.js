import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/store/store";
import { fetchUserInfo, getUserInfo } from "../../redux/slices/auth/authSlice";
import { getCookies, getCookie, setCookie, deleteCookie } from 'cookies-next';

export default function AppView() {

  const dispatch = useAppDispatch();
  const user = useSelector(getUserInfo);

  useEffect(() => {
    dispatch(fetchUserInfo());
  }, [dispatch]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h2>Monitors</h2>
            <hr/>
            <h3>Hello {user.username} 👋</h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export const getServerSideProps = async ({req,res}) => {
    const token = getCookie("token",{req,res});
    
    if (!token) {
        return {
        redirect: {
            destination: "/login",
            permanent: false,
        },
        };
    
    }
    return { props: {} };

}  

    