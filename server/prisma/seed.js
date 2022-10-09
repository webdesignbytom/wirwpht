const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function seed() {
  const password = await bcrypt.hash('123', 8);

  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@admin.com',
      password,
      role: 'ADMIN',
      username: 'DeanDangerous',
    },
  });

  const createdUser = await prisma.user.create({
    data: {
      email: 'maxpower@email.com',
      password,
      username: 'MaxPower89',
    },
  });

  const createdUserTwo = await prisma.user.create({
    data: {
      email: 'atanzarian@email.com',
      password,
      username: 'Skinner69',
    },
  });

  const userProfile = await prisma.profile.create({
    data: {
      userId: createdUser.id,
      firstName: 'Test',
      lastName: 'Test',
      profileImageUrl:
        'https://images.unsplash.com/photo-1542652735873-fb2825bac6e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    }
  })

  const createItem = await prisma.item.create({
    data: {
      userId: createdUser.id,
      name: "hat",
      desc: "its a hat",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/55/Typical_tapered_Welsh_hat.jpg",
      cost: 100,
    }
  })

  console.log(createdUser, userProfile, createItem);
}

seed().catch(async (error) => {
  console.error(error);
  await prisma.$disconnect();
  process.exit(1);
});
