import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const allRouterSlice = createApi({
    reducerPath : "AllRouter",
    baseQuery : fetchBaseQuery({
        baseUrl : "http://localhost:5000/"
    }),
    endpoints : (builder)=>({
        postUser : builder.mutation({
            query : (datas)=> {
                console.log(datas)
               return{
                    url : 'registerUser',
                    method : "POST",
                    body : datas
               } 
            }
        }),
        loginMatch : builder.mutation({
            query : (info)=>({
                url : 'login',
                method : "post",
                body : info
            })
        })
    })
})

export const {usePostUserMutation, useLoginMatchMutation} = allRouterSlice;