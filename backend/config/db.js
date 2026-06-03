export const users = [
    {id:1, name: "Divyang"},
    {id:2, name: "Khanjan"},
    {id:3, name: "Priyank"}
]

export const tasks = [
    {id:1, uid: 1, title: "explore dsa", isCompleted: false},
    {id:2, uid: 1, title: "explore react", isCompleted: true},
    {id:3, uid: 2, title: "explore java", isCompleted: false},
    {id:4, uid: 2, title: "explore c++", isCompleted: false},
    {id:5, uid: 3, title: "explore js", isCompleted: true},
    {id:6, uid: 3, title: "explore ai", isCompleted: true},
]

export const activityHistory = [
    {id:1, uid:1, action: "CREATED_TASK", details: "Created Task: Learn DSA", timestamp: new Date("2026-06-03").toISOString},
    {id:2, uid:1, action: "COMPLETED_TASK", details: "Created Task: Learn DSA", timestamp: new Date("2026-06-03").toISOString},
    {id:3, uid:2, action: "CREATED_TASK", details: "Created Task: Learn AI", timestamp: new Date("2026-06-03").toISOString},
    {id:4, uid:2, action: "COMPLETED_TASK", details: "Created Task: Learn AI", timestamp: new Date("2026-06-03").toISOString},
    {id:5, uid:3, action: "CREATED_TASK", details: "Created Task: Learn ML", timestamp: new Date("2026-06-03").toISOString},
    {id:6, uid:3, action: "COMPLETED_TASK", details: "Created Task: Learn ML", timestamp: new Date("2026-06-03").toISOString},
    {id:7, uid:1, action: "CREATED_TASK", details: "Created Task: Learn OS", timestamp: new Date("2026-06-03").toISOString},
]