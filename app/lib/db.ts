import {PrismaClient} from "@prisma/client";


const  prismaSingleton = () =>{
    return new PrismaClient();
}

declare global{
    var prismaGlobal: undefined | ReturnType<typeof PrismaClientSingleton>;
}


const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();


if (process.env.NODE.ENV !== "production") globalThis.prismaGlobal = prisma;