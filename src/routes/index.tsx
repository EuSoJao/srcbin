import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

function RouteComponent() {
	const buttons = [
		{ name: "Clientes", url: "/clients" },
		{ name: "Estoque", url: "/stock" },
		{ name: "Dívidas", url: "/debts" },
	];

	return (
		<>
			<div className="flex flex-col h-screen w-screen bg-zinc-700 justify-center items-center">
				<h1 className="m-8 text-zinc-100 uppercase text-shadow text-shadow-x-md text-shadow-y-md text-shadow-blur-1 text-shadow-zinc-700">
					Controle de estoque
				</h1>
				<div className="flex flex-col gap-2">
					{buttons.map((button) => (
						<Link to={button.url}>
							<Button key={button.name} className="w-48 h-16">
								{button.name}
							</Button>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}
