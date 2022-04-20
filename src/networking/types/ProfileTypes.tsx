

export interface NewUserBody {
    email: string;
    password: string;
    age: string;
    profile_img: string;
    name: string;
    role: string;
}

export interface UploadStylistProfile {
    interests: Array<string>;
    portfolio: Array<string>;
    cost: number;
}

export interface UploadStyleSeekerProfile {
    interests: Array<string>
}

export interface BulkStylists {
    stylists: Array<StylistProfile> | null;
}

export interface StylistProfile {
    email: string,
    name: string,
    age: string,
    description: string,
    _id: string,
    profile_img: string,
    role: string,
    cost: number,
    interests: Array<string>,
    portfolio: Array<string>
}


// module.exports.userAccountSchema = Joi.object({
//     email: Joi.string().required(),
//     name: Joi.string().required().min(3).max(100),
//     age: Joi.string().required(),
//     profile_img: Joi.string().required(),
//     password: Joi.string().required(),
//     role: Joi.string().valid('stylist', 'style-seeker').required()
// });

// // stylist profile schema for request body
// module.exports.stylistSchema = Joi.object({
//     cost: Joi.number().required(),
//     // description: Joi.string().required(),
//     interests: Joi.array().optional(),
//     portfolio: Joi.array().optional()
// })