import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type FormInputProps = {
  label: string;
  name: string;
  type: string;
  defaultValue?: string;
  placeholder?: string;
}
const FormInput = (props: FormInputProps) => {
    const { name, label, type, defaultValue, placeholder } = props;
  return (
    <div className="mb-2">
    <Label htmlFor={name}>{label}</Label>
    <Input 
    type={type} 
    name={name} 
    defaultValue={defaultValue} 
    placeholder={placeholder} 
    />
  </div>
  )
}
export default FormInput