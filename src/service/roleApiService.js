import db from "../models"

const createNewRoles = async (roles) => {
    try {
        let currentRoles = await db.Role.findAll({
            attributes: ['url', 'description'],
            raw: true
        })
        const presists = roles.filter(({ url: url1 }) =>
            !currentRoles.some(({ url: url2 }) => url1 === url2
            ))
        console.log('check persists', presists)
        if (presists.length === 0) {
            return {
                EM: "Nothing to create ...",
                EC: 0,
                DT: {}
            };
        }
        await db.Role.bulkCreate(presists)
        return {
            EM: `Create role succeeds: ${presists.length} roles`,
            EC: 0,
            DT: {}
        };
    } catch (error) {
        console.error("Error deleting user:", error);
        return {
            EM: "Error create role",
            EC: -1,
            DT: {}
        };

    }
}

module.exports = {
    createNewRoles
}