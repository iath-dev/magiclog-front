import type { ColumnDefinition } from "../components/ui/Table";
import type { Product } from "../types/product";

export const AdminProductTableColumns: Array<ColumnDefinition<Product, keyof Product>> = [
    {
        key: "id",
        header: "ID",
        width: 100,
        render: (value) => <span className="font-mono">{`${value}`}</span>,
    },
    {
        key: "owner",
        header: "Vendedor",
        width: 200,
        render: (value) => {
            // Puede ser string (username) o un objeto con username
            if (typeof value === "string") {
                return <span className="font-semibold">{value}</span>;
            }
            if (typeof value === "object" && value !== null && "username" in value) {
                return <span className="font-semibold">{value.username}</span>;
            }
            return <span className="font-semibold">Desconocido</span>;
        },
    },
    {
        key: "name",
        header: "Nombre",
        width: 200,
        render: (value) => <span className="font-semibold">{`${value}`}</span>,
    },
    {
        key: "sku",
        header: "SKU",
        width: 150,
        render: (value) => <span className="font-mono">{`${value}`}</span>,
    },
    {
        key: "quantity",
        header: "Stock",
        width: 100,
    },
    {
        key: "price",
        header: "Precio",
        width: 150,
        render: (value) => (
            <span className="text-green-600">
                {value?.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}
            </span>
        ),
    },
]