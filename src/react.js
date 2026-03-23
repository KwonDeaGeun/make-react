import { createDOM } from "./createDOM";

const React = {
	createElement(type, props, ...children) {
		if (typeof type === "function") {
			return type(props, ...children);
		}
		return {
			type,
			props: {
				...props,
				children,
			},
		};
	},
	render(content, container) {
		const element = createDOM(content);
		container.appendChild(element);
	},
};

export default React;
