import { configureStore } from '@reduxjs/toolkit';

const configStore = () => {
	const store = configureStore()
	return store;
}

export default configStore;