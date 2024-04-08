import locale from "@/locales/home.json"
import { ScrollShadow } from '@nextui-org/react'

function Marquee() {
    const { TESTIMONIALS } = locale
    return (
        <section className="pb-12">
            <div className="absolute flex max-w-[100dvw] overflow-hidden pb-5 mx-auto left-0">
                <ScrollShadow visibility={"both"} hideScrollBar orientation="horizontal" >
                    <div className="flex w-max animate-marquee [--duration:30s] hover:[animation-play-state:paused]">
                        {[...TESTIMONIALS, ...TESTIMONIALS].map((testimonial, index) => (
                            <div key={`${testimonial.ID}_${index}`} className="h-full px-2.5">
                                <div className="relative h-full w-[28rem] rounded-2xl border border-white/5 bg-default/40 px-8 py-6">
                                    <div className="pb-4 font-light">{testimonial.TEXT}</div>

                                    <div className="mt-auto flex items-center gap-4">
                                        <img src={testimonial.IMAGE} className="h-9 w-9 rounded-full" alt={testimonial.NAME} />

                                        <div className="flex flex-col text-sm">
                                            <div className="">{testimonial.NAME}</div>

                                            <div className="">{testimonial.TITLE}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollShadow>
            </div>
        </section>
    )
}

export default Marquee