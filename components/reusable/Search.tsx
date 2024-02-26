import { Input } from "@/components/reusable/input"

function SearchBar({...props}){
  return (
        <Input placeholder='What are you looking for today?' {...props}/> 
  )
}

export default SearchBar