import { activityHistory } from "../config/db.js";

export const getUsersHistory = (req,res) => {
    const { userid } = req.query;

    if(userid) {
        const userLog = activityHistory.filter(log => log.uid === Number(uid));
        return res.status(200).json(userLog);
    }
    
    res.status(200).json(activityHistory);
}