import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"


const TextAreaInput = ({
    name, 
    labelText, 
    defaultValue, 
    placeholder

}: {
    name: string, 
    labelText: string, 
    defaultValue?: string, 
    placeholder?: string
}) => {
    
  return (
    <div className="mb-2">
        <Label htmlFor={name} className="capitalize">{labelText || name}</Label>
    <Textarea
    id={name}
    name={name}
    defaultValue={defaultValue}
    placeholder={placeholder}
    rows={5}
    required
    />

  </div>
  )
}
export default TextAreaInput