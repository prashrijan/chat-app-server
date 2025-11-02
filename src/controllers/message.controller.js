import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

export const getUsersForSidebar = async (req, res) => {
    try {
        const loggedInUserId = req.user._id;

        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId },
        }).select("-password");

        if (!filteredUsers) {
            return res.status(404).json(new ApiError(404, "No Users Found"));
        }

        return res
            .status(200)
            .json(
                new ApiResponse(200, filteredUsers, "Users found successfully")
            );
    } catch (error) {
        console.log("Error in getUsersSidebar: ", error);
        return res
            .status(500)
            .json(new ApiError(500, "Internal Server Errror"));
    }
};
