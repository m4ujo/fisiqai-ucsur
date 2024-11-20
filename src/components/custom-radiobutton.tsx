import { Label } from "@/components/ui/label";
import { RadioGroupItem } from "@/components/ui/radio-group";

export default function CustomRadioButton({ option, index }: { option: string; index: number }) {
  const optionValue = `option-${index}-${option}-${Math.random()}`;

  return (
    <div className="flex items-center space-x-2">
      <RadioGroupItem value={option} id={optionValue} />
      <Label className="text-base" htmlFor={optionValue}>
        {option}
      </Label>
    </div>
  );
}
