import React from 'react'
import { Input } from "@/components/ui/input"

function SearchBar({...props}){
  return (
        <Input placeholder='What are you looking for today?' {...props}/> 
  )
}

export default SearchBar