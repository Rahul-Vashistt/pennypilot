import AuthFormForLogin from "../features/auth/SignIn/AuthFormForLogin";
import BrandPanelForLogin from "../features/auth/SignIn/BrandPanelForLogin";

export default function SigninPage() {
  return (
    <>
      <div className="flex"> 
        <BrandPanelForLogin />
        <AuthFormForLogin />
      </div>
    </>
  );
}
