import { z } from 'zod';
import type { filterSchema } from '../../../schemas/schemas';
import FormInput from '../FormInput/FormInput';
import type { FormError } from '../../../types/general';

export type FilterFormValues = z.infer<typeof filterSchema>;

interface FilterFormProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filterData: Partial<FilterFormValues>;
  errors?: FormError;
}

const FilterForm: React.FC<FilterFormProps> = ({ filterData, onChange, errors = {} }) => {
  return (
    <div className="grid grid-cols-2 md:flex flex-wrap gap-2 mb-4 items-end">
      <FormInput
        type="text"
        name="name"
        label="Nombre del producto"
        placeholder="Nombre del producto"
        value={filterData.name}
        onChange={onChange}
        hasError={!!errors.name}
        error={errors.name}
        className="w-40"
      />
      <FormInput
        type="text"
        name="sku"
        label="SKU"
        value={filterData.sku}
        onChange={onChange}
        hasError={!!errors.sku}
        error={errors.sku}
        className="w-40"
      />
      <FormInput
        type="number"
        name="minPrice"
        label="Precio Minimo"
        value={filterData.minPrice}
        onChange={onChange}
        hasError={!!errors.minPrice}
        error={errors.minPrice}
        className="w-40"
      />
      <FormInput
        type="number"
        name="maxPrice"
        label="Precio Maximo"
        value={filterData.maxPrice}
        onChange={onChange}
        hasError={!!errors.maxPrice}
        error={errors.maxPrice}
        className="w-40"
      />
    </div>
  );
};

export default FilterForm;
