import React, { useState } from "react";
import { fetchAddressFromCEP, formatCep } from "../../../lib/utils";
import type { Address } from "../../../types";

const CepForm = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState<Address | null>(null);
  const [error, setError] = useState("");

  const handleCepChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatCep(value);
    if (value.length <= 9) setCep(formatted);
  };

  const handleBlur = async () => {
    try {
      const data = await fetchAddressFromCEP(cep);
      setAddress(data);
      setError("");
    } catch (err: any) {
      setError(err.message);
      setAddress(null);
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Digite seu CEP"
        value={cep}
        onChange={handleCepChange}
        onBlur={handleBlur}
        className="border rounded p-3 max-w-64 w-full mb-1.5"
      />
      {error && <p className="text-red-500 font-bold text-xs">{error}</p>}
      {address && (
        <div>
          <p>{`Endereço: ${address.logradouro}, ${address.bairro} - ${address.localidade} / ${address.uf}`}</p>
        </div>
      )}
    </div>
  );
};

export default CepForm;
