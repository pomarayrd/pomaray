import locale from "@/locales/root.json";
import FooterItem from "./FooterItem";

const FooterTable = () => {
	return locale.FOOTER.map((table) => (
		<ul key={table.TITLE} className="relative flex flex-col gap-1 w-fit h-fit pb-6">
			<h3 className="font-bold text-base py-2">{table.TITLE}</h3>
			{table.ELEMENTS.map((element) => (
				<FooterItem
					key={element.LINK.trim()}
					text={element.TEXT as string}
					href={element.LINK}
				/>
			))}
		</ul>
	));
};

export default FooterTable;
