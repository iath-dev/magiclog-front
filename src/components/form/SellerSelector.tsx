import React, { type InputHTMLAttributes } from 'react';
import { useSellers } from '../../hooks/useSellers';
import DataList from './Datalist';

type SellerSelectorProps = Pick<InputHTMLAttributes<HTMLInputElement>, 'onChange'>;

const SellerSelector: React.FC<SellerSelectorProps> = ({ onChange }) => {
  const { isLoading, data: sellers } = useSellers();

  return (
    <DataList
      disabled={isLoading}
      name="username"
      onChange={onChange}
      placeholder="Busca por usuario"
      options={sellers?.map((e) => e.username) ?? []}
    />
  );
};

export default SellerSelector;
