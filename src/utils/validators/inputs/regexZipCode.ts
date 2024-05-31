function validateZipCode(zipCode: string) {
	const regex = /^\d{8}$/;

	if (!zipCode) {
		return false;
	}

	if (zipCode.length !== 8) {
		return false;
	}

	return regex.test(zipCode);
}

export { validateZipCode };

