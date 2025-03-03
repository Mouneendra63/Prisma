const {PrismaClient} =require('@prisma/client')

const prisma=new PrismaClient()


const main=async()=>{

  Single User insertion
  const user=await prisma.user.create({
    data:{
      name:'Mounendra Vanka',
      email:'mouneendravanka@gmail.com',
    }
  });
  console.log(user);


  Multiple User insertion
  const user=await prisma.user.createMany({
    data:[{
      name:'Shivam Kumar',
      email:'shivamkumar123@gmail.com'
    },
    {
      name:'Kirety  Chowdary',
      email:'kiretychowdary@gmail.com'
    },
    {
      name:'Bhargav Shanmukh',
      email:'bhargavshanukh@gmail.com'
    }
  ]
  });
  console.log(user);

  Read From Database all
  const allusers=await prisma.user.findMany();
  console.log(allusers);

  read of particular user
  const singleUser=await prisma.user.findUnique({
    where:{
      id:3
    }
  });
  console.log(singleUser);

  Update Data
  const userUpdate=await prisma.user.update({
    where:{
      id:4
    },
    data:{
      name:'PB'
    }
  });

  console.log(userUpdate);

  Upadte Multiple Users
  const allUpdate=await prisma.user.updateMany({
    where:{
        id:{
          in:[1,2]
        }
    },
    data:{
      name:"Selected",
    }
  });

  console.log(allUpdate);

  Delete Single User
  const delUser=await prisma.user.delete({
    where:{
      id:1
    }
  });

  console.log(delUser);

  Delete Multiple Users
  const someUsers=await prisma.user.deleteMany({
    where:{
      id:{
        in:[3,4]
      }
    }
  });

  console.log(someUsers);

  const clients = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, Another City",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      phone: "555-666-7777",
      address: "789 Oak St, Some Town",
    },
  ];
  
  const insertedClients = await prisma.client.createMany({
    data: clients,
    skipDuplicates: true, 
  });
  console.log("Clients inserted:", insertedClients);

}


main().catch(e=>{throw e}).finally(async()=>{
    await prisma.$disconnect()
}
)
