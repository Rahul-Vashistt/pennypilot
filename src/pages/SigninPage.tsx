import AuthFormForLogin from "../features/auth/Login/AuthFormForLogin";
import BrandPanelForLogin from "../features/auth/Login/BrandPanelForLogin";

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
