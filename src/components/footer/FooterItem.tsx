import { Link as NextLink } from "@nextui-org/link";
import Link from "next/link";

const FooterItem = ({
	text,
	href,
}: {
	text: string;
	href: string;
}) => {
	return (
		<li>
			<NextLink
				underline="hover"
				className="hover:opacity-100 hover:text-primary opacity-60 transition-opacity text-foreground"
				as={Link}
				aria-label={text}
				href={href}
			>
				{text}
			</NextLink>
		</li>
	);
};

export default FooterItem;
