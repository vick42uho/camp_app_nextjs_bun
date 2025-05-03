import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { providers } from "@/utils/providers";

const ProvidersInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "provider";

  return (
    <div className="mb-2">
      <Label htmlFor={name} className="capitalize">
        {name}
      </Label>
      <Select name={name} defaultValue={defaultValue || providers[0].PROVINCE_NAME} required>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select Provider" />
        </SelectTrigger>
        <SelectContent>
          {providers.map((provider) => (
            <SelectItem key={provider.PROVINCE_ID} value={provider.PROVINCE_NAME}>
              <span className="flex items-center gap-2 capitalize">
                {provider.PROVINCE_NAME}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
export default ProvidersInput;
