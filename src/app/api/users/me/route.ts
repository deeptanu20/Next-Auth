import { connect } from "@/dbConfig/dbConfig";

import User from '@/models/userModel';

import {NextRequest,NextResponse} from 'next/server'

import jwt from "jsonwebtoken"

import { getData } from "@/helpers/getData";

connect();

export async function POST(request:NextRequest){

    //extract data from token

     const userId=await getData(request)

    const user= await User.findOne({_id:userId}).select("-password")  //password nehi chahiye

    if(!user){
        return   NextResponse.json({message:"User not found"});
    }

    return NextResponse.json({
        message:"User found",
        data:user
    })
}