import db from "../models"

const getAllRoles = async () => {
    try {
        let data = await db.Role.findAll({ order: [['id', 'DESC']] })

        return {
            EM: `Get all role succeeds`,
            EC: 0,
            DT: data
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
const getAllRoleWithPagination = async (page, limit) => {
    try {
        const { count, rows } = await db.Role.findAndCountAll({
            offset: offset,
            limit: limit,
            order: [['id', 'DESC']]
        })
        let data = {
            totalRows: count,
            totalPage: totalPage,
            roles: rows
        }
        return {
            EM: "ok fetching role",
            EC: 0,
            DT: data
        };
    } catch (error) {
        console.error("Error fetching role:", error);
        return {
            EM: "Error fetching role",
            EC: -1,
            DT: []
        };

    }
}
const createNewRoles = async (roles) => {
    try {
        let currentRoles = await db.Role.findAll({
            attributes: ['url', 'description'],
            raw: true
        })
        const presists = roles.filter(({ url: url1 }) =>
            !currentRoles.some(({ url: url2 }) => url1 === url2
            ))
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

const deleteRole = async (id) => {
    try {
        let data = await db.Role.findOne({
            where: { id: id }
        })
        await data.destroy();
        return {
            EM: `Delete role succeeds`,
            EC: 0,
            DT: {}
        };
    } catch (error) {
        console.error("Error deleting user:", error);
        return {
            EM: "Error Delete role",
            EC: -1,
            DT: {}
        };

    }
}
const getRolesByGroup = async (id) => {
    try {
        if (!id) {
            return {
                EM: `not found any roles`,
                EC: 0,
                DT: []
            };
        }

        let roles = await db.Group.findOne({
            where: { id: id },
            attributes: ["id", "name", "description"],
            include: {
                model: db.Role,
                attributes: ["id", "url", "description"],
                through: { attributes: [] }
            },
        })
        return {
            EM: `Get role by group succeeds`,
            EC: 0,
            DT: roles
        };
    } catch (error) {
        console.error("Error fetching roles by group:", error);
        return {
            EM: "Error Delete role",
            EC: -1,
            DT: []
        };

    }
}
const assignToGroup = async (data) => {
    try {
        await db.Group_Role.destroy({
            where: { groupId: +data.groupId }
        })
        await db.Group_Role.bulkCreate(data.groupRoles)
        return {
            EM: `Assign role to group succeeds`,
            EC: 0,
            DT: []
        };
    } catch (error) {
        console.error("Error fetching roles by group:", error);
        return {
            EM: "Error assign role to group ",
            EC: -1,
            DT: []
        };

    }
}

module.exports = {
    createNewRoles, getAllRoles, deleteRole, getRolesByGroup, assignToGroup, getAllRoleWithPagination
}