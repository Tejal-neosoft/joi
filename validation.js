import joi from 'joi';

export const BookValidations = {
	createBook: {
		body: joi.object({
			name: joi.string().required(),
			author: joi.string().required(),
			summary: joi.string().required(),
			numberOfPages: joi.number().required()
		})
	}
};
