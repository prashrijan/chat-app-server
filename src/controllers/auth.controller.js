import { User } from "../models/user.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

export const signUp = async (req, res) => {
    try {
        const { email, password, fullName } = req.body;
        if (!email || !password || !fullName) {
            return res
                .status(400)
                .json(new ApiError(400, "All fields are required"));
        }

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res
                .status(400)
                .json(
                    new ApiError(400, "User with this email already exists.")
                );
        }

        const user = await User.create({
            email,
            password,
            fullName,
        });

        const createdUser = await User.findById(user._id).select("-password");

        return res
            .status(200)
            .json(
                new ApiResponse(200, createdUser, "User created successfully.")
            );
    } catch (error) {
        console.log("Error creating user: ", error);
        return res
            .status(500)
            .json(
                new ApiError(500, "Server Error while creating the user", error)
            );
    }
};
export const signIn = (req, res) => {
    res.send("sign in");
};
export const signOut = (req, res) => {
    res.send("sign out");
};
