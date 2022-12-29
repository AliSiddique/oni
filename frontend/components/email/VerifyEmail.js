import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useAppDispatch } from "../store";
import { getVerifyEmailStatus, verifyEmail } from "../redux/slices/auth/authSlice";

export default function VerifyEmailView() {
    const router = useRouter();
  let { key } = router.query; // get key (token) from URL
  const dispatch = useAppDispatch();
  const emailVerifyStatus = useSelector(getVerifyEmailStatus); //get emailVerifyStatus

  // after view load send POST request
  useEffect(() => {
    if (key) {
      dispatch(verifyEmail(key));
    }
  }, [dispatch, key]);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            <h1>Verify Email</h1>

            {(emailVerifyStatus === "unknown" ||
              emailVerifyStatus === "error") && (
              <p>
                We can't verify your email. Please try to register again or
                contact us by email contact@monitor-uptime.com
              </p>
            )}
            {emailVerifyStatus === "started" && (
              <p>Email verification started, please wait a while ...</p>
            )}
            {emailVerifyStatus === "ok" && (
              <p>
                Successfull email verification🎉 Please login to start
                monitoring!
                <br />
                <button
                  className="btn btn-lg btn-primary my-2"
                  onClick={() => router.push("/login")}
                >
                  Login
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}