import AuthFormForSignup from "../features/auth/SignUp/AuthFormForSignup";
import BrandPanelForSignup from "../features/auth/SignUp/BrandPanelForSignup";

export default function SignupPage() {
  return (
    <>
      <main className="flex"> 
        <BrandPanelForSignup />
        <AuthFormForSignup />
      </main>
    </>
  );
}
