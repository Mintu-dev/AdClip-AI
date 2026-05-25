import pkg from './generated/prisma/index.js';
const { PrismaClient } = pkg;
const p = new PrismaClient();
const user = await p.user.create({
  data:{
    id:'user_3Dx9DUQFeQhq5rBfAhu8NwCbSVc',
    email:'mintu.dev121203@gmail.com',
    name:'Mintu Kumar',
    image:'',
    credits:20,
    updatedAt:new Date(),
    createdAt:new Date()
  }
});
console.log('SUCCESS!', user);
await p.$disconnect();
