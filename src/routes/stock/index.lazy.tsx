import { Button } from "@/components/ui/button";
import json from "@/db/data.json";
import { createLazyFileRoute } from "@tanstack/react-router";
import {
	ColumnDef,
	createColumnHelper,
	getCoreRowModel,
	useReactTable,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";

export const Route = createLazyFileRoute("/stock/")({
	component: RouteComponent,
});
type Product = {
	id: number;
	name: string;
	value: number;
	sold: number;
	stock: number;
};

const items = json.items;

const helper = createColumnHelper<Product>();

const columns = [
	helper.accessor("name", {
		cell: (info) => info.getValue(),
		footer: (info) => info.column.id,
	}),

	helper.accessor((row) => row.name, {
		id: "name",
		cell: (info) => <i>{info.getValue()}</i>,
	}),
];

function RouteComponent() {
	const table = useReactTable({
		columns,
		items,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<>
			<div className="">
				<Button>Reload</Button>
				<table>
					<tr>
						<td></td>
						<td>Tobias</td>
						<td>Linus</td>
					</tr>
					<tr>
						<td>16</td>
						<td>14</td>
						<td>10</td>
					</tr>
				</table>
			</div>
		</>
	);
}
