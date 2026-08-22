import AuthFormForSignin from "../features/auth/SignIn/AuthFormForSignin";
import BrandPanelForLogin from "../features/auth/SignIn/BrandPanelForLogin";

export default function SigninPage() {
  return (
    <>
      <div className="flex"> 
        <BrandPanelForLogin />
        <AuthFormForSignin />
      </div>
    </>
  );
}
