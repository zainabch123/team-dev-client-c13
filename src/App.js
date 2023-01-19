import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Login from "./pages/login";
import Register from "./pages/register";
import Loading from "./pages/loading";
import Verification from "./pages/verification";
import { AuthProvider, ProtectedRoute } from "./context/auth";

const App = () => {
	return (
		<>
			<AuthProvider>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="register" element={<Register />} />
					<Route path="loading" element={<Loading />} />
					<Route path="verification" element={<Verification />} />

					<Route
						index
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthProvider>
		</>
	);
};

export default App;
