import { Routes, Route, BrowserRouter as Router, Navigate } from "react-router-dom";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import About from "./pages/About";
import Contacts from "./pages/Contacts";

function App() {
	return (
		<Router>
			<Routes>
				<Route
					path=""
					element={
						<Layout>
							<p>Home Page</p>
						</Layout>
					}
				/>
				<Route
					path="/register"
					element={
						<Layout>
							<Register />
						</Layout>
					}
				/>
				<Route
					path="/sign-in"
					element={
						<Layout>
							<SignIn />
						</Layout>
					}
				/>
				<Route
					path="/about"
					element={
						<Layout>
							<About />
						</Layout>
					}
				/>
				<Route
					path="/contacts"
					element={
						<Layout>
							<Contacts />
						</Layout>
					}
				/>
				<Route
					path="*"
					element={<Navigate to={"/"} />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
