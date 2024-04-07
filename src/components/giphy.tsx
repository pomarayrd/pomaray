import { type GifData, getRandomGif } from "@/app/_actions/giphy";
import { Image } from "@nextui-org/react";
import { useMemo, useState } from "react";

function GiphyMeme(): JSX.Element {
	const [gifData, setGifData] = useState<GifData | null>(null);

	useMemo(() => {
		const fetchRandomGif = async () => {
			const { url, title } = await getRandomGif();
			setGifData({ url, title });
		};

		fetchRandomGif();
	}, []);


	return (
		<div>{gifData && <Image src={gifData.url} alt={gifData.title} />}</div>
	);
}

export default GiphyMeme;
