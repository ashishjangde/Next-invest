import asyncHandler from "../_utils/asyncHandler";
import {EmailSchema} from  '@/schema/EmailSchema';
import { formatValidationErrors } from "../_utils/FormatValidationError";
import { ApiError } from "../_utils/ApiError";
import prisma from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { ApiResponse } from "../_utils/ApiResponse";

export const POST = asyncHandler(async (req) => {

    const body = await req.json();
    const result =  EmailSchema.safeParse(body);

    if (!result.success) {
        const error = formatValidationErrors(result.error);
        throw new ApiError(400,  'Validation Error', error);
     }

     const { email } = result.data;

    const data = await prisma.newsLetterSubscribe.create({
        data: {
            email: email
        }
     });
     if(!data){
        throw new ApiError(500, 'Something went wrong');
     }

    return NextResponse.json(new ApiResponse({
        message: 'Subscribed successfully',
     }),{status: 200});

});