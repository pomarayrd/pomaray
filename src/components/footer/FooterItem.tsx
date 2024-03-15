import Link from "next/link";

const FooterItem = ({
	text,
	href,
}: {
	text: string;
	href: string;
}) => {
	return (
		<li className="hover:underline hover:opacity-100 hover:text-primary opacity-60 transition-opacity">
			<Link aria-label={text} href={href}>
				{text}
			</Link>
		</li>
	);
};

export default FooterItem;
