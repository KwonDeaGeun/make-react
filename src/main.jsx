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

export const Change = () => {
	return <h1>내용 변경</h1>;
};

const app = document.getElementById("app");
React.render(App(), app);
setTimeout(() => {
	app.innerHTML = "";
	React.render(Change(), app);
}, 2000);

console.log(App());
