import { Container } from '@/components/container'
import TitleSkeleton from './_components/TitleSkeleton'

function PostSlugLoadingPage() {
    return (
        <Container>
            <section className="min-h-[50vh] mt-24 pb-10">
                <div className="flex flex-col gap-8">
                    <TitleSkeleton />
                </div>
            </section>
        </Container>
    )
}

export default PostSlugLoadingPage