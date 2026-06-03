
import { users } from "../config/db.js";

export const getUsers = (req,res) => {
    res.status(200).json(users);
}