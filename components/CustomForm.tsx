"use client"
import React from 'react'
import { useForm } from 'react-hook-form'


type FormProps = {
    onSubmit:any,
    fields:any
}

const CustomForm = ({onSubmit,fields}:FormProps) => {
    const {register,handleSubmit,formState:{errors}} = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map((field:any)=>(
            <div key={field.name}>
                <input {...register(field.name)} type={field.type} placeholder={field.placeholder}/>

            </div>
        ))}
        <button>click me</button>

    </form>
  )
}

export default CustomForm