type SelectProps = {
  inventory: number;
  value: number;
  onChange: (value: number) => void;
};

export function Select({ inventory, value, onChange }: SelectProps) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="border rounded p-3 max-w-64 w-full"
    >
      {Array.from({ length: inventory }, (_, i) => i + 1).map((qtd) => (
        <option key={qtd} value={qtd}>
          {qtd}
        </option>
      ))}
    </select>
  );
}
