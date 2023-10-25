const prisma = require("../../db");

module.exports = {
  getUsers: async function () {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  },
  createUsers: async function (body){
    const user = await prisma.user.create({data: body});
    return user;
  },
  deleteUser: async function(id){
    const user = await prisma.user.delete({where: {id}}) 
    return user
  }
};
