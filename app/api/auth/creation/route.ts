 import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server"
import { Prisma } from "@prisma/client";
import { HamIcon, LassoSelect } from "lucide-react";
import { NextResponse } from "next/server";
 export async function GET() {

  const {getUser}  =  getKindeServerSession();
 const user = await getUser();
 
 
 if(!user || user === null || !user.id){
    throw new Error("Something went Wrong..!");
 }

 let dbUser =  await Prisma.UserScalarFieldEnum.findUnique({
   where:{
      id: user.id,
   },
 });


 if (!dbUser) {
   dbUser = await Prisma.user.create({

      
data: {
   id: user.id,
   firstname: user.given_name ?? "",
   lastName : user.family_name ?? "",
   profileimage : user.picture,
},

   });
 }

 return NextResponse.redirect('https://localhost:3000/guestbook');
 
    
 }