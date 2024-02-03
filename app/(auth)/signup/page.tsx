"use client"
import { CustomForm } from "@/components";
import { Metadata } from "next"

// export const metadata: Metadata = {
//     title: 'Signup | Bidcart',

//   }

export default function Signup(){
  const onSubmit = (data:any) =>{
    console.log(data)

  }

  const fields = [
    { name: "firstName", placeholder: "First Name", type: "text", validation: { required: "This field is required" } },
    { name: "lastName", placeholder: "Last Name", type: "text", validation: { required: "This field is required" } },
    { name: "email", placeholder: "Email", type: "email", validation: { required: "This field is required" } },
  ];
    return (
      <>
      <CustomForm fields={fields} onSubmit={onSubmit}/>
      </>
    )
}