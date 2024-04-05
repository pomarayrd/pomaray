import { Container } from "@/components/container";
import CollageSection from "./_components/collage";
import HeroSection from "./_components/hero";
import MapSection from "./_components/map";
import VideoSection from "./_components/video";

export default function Home() {
	return (
		<Container size="7xl" className="gap-32">
			<HeroSection />
			<VideoSection />
			<CollageSection />
			<MapSection />
		</Container>
	);
}
