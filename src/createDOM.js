export const createDOM = (element) => {
	if (element == null || typeof element === "boolean") {
		return document.createTextNode("");
	}

	if (Array.isArray(element)) {
		const fragment = document.createDocumentFragment();
		element.flat(Infinity).forEach((child) => {
			fragment.appendChild(createDOM(child));
		});
		return fragment;
	}

	if (typeof element === "string" || typeof element === "number") {
		return document.createTextNode(element);
	}

	if (typeof element.type === "function") {
		return createDOM(element.type(element.props));
	}

	const DOMElement = document.createElement(element.type);

	if (element.props) {
		Object.keys(element.props).forEach((key) => {
			if (key === "children") return;
			DOMElement[key] = element.props[key];
		});
	}

	const children = element.props?.children ?? [];

	if (children.length > 0) {
		children.forEach((child) => {
			DOMElement.appendChild(createDOM(child));
		});
	}

	return DOMElement;
};
