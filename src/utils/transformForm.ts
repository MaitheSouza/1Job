export const transformForm = (inputs: HTMLInputElement[]) => {
	const body: any = {};
	inputs.forEach((input) => {
		if (input.value !== '' || input.value) {
			body[input.name] = input.value;
		}
	});
	return body;
};
