import { Container } from "@/components/container";
import G3deon from "@/icons/G3deon";
import { Avatar, Badge, Tooltip } from "@nextui-org/react";

function ContributorsPage() {
	return (
		<Container>
			<Tooltip
				placement="bottom"
				showArrow
				color="secondary"
				content="CEO de G3deon"
			>
				<Badge
					size="lg"
					className="size-[2.25rem] fill-white p-1.5"
					content={<G3deon />}
					color="secondary"
				>
					<Avatar
						isBordered
						color="secondary"
						radius="md"
						size="lg"
						className="w-28 h-28 border-secondary"
						src="https://i.pravatar.cc/?u=a042581f4e29026709d"
					/>
				</Badge>
			</Tooltip>
		</Container>
	);
}

export default ContributorsPage;
