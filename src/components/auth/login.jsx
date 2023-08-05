import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux"; // Importa useDispatch
import { loginSuccess, loginFailure } from "../../redux/action/index";
function App() {
  const dispatch = useDispatch();
  const clientId =
    "885204383796-ja1fo3p2717s6g1ujo5hu9l43s8ag5nv.apps.googleusercontent.com";

  const handleGoogleLoginSuccess = (credentialResponse) => {
    axios
      .post("http://localhost:3001/login", {
        token: credentialResponse.credential,
      })
      .then((response) => {
        console.log(response.data.user)
        dispatch(loginSuccess(response.data.user));
        window.location.href = "/home";
      })
      .catch((error) => {
        console.error(error);
        alert("upsss algo salio mal");
        dispatch(loginFailure());
      });
  };

  const handleGoogleLoginError = () => {
    console.log("Login Failed");

    dispatch(loginFailure());
  };


  return (
    <>
      <GoogleOAuthProvider clientId={clientId}>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
        />
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
