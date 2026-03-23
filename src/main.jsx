import React from "./react.js";

const App = () => {
	return (
		<div className="container">
			<Header />
			<h1 id="app" className="test">
				제목
			</h1>
			<span>내용</span>
		</div>
	);
};

export const Header = () => {
	return <header>헤더</header>;
};

const app = document.getElementById("app");
React.render(App(), app);

console.log(App());
