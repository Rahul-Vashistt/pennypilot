import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../../store/useAuth";

export default function ProtectedRoute() {
    const { isAuthenticated, isLoading } = useAuthStore();

    if (isLoading) {
        return (
            <div>
                Loading...
            </div>
        )
    }

    if (!isAuthenticated) {
        return <Navigate to={"/sign-in"} replace />
    }

    return <Outlet />
}