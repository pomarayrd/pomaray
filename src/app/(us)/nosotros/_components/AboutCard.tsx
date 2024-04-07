import type { PomarayComponent } from "@/components/types"
import { cn } from "@/lib/utils"

interface AboutCardProps extends PomarayComponent {
    icon: React.ReactNode
    title: string
    label: string
    description: string
}

function AboutCard({
    icon,
    title,
    label,
    description,
    className
}: AboutCardProps) {
    return (
        <li className={cn("relative flex flex-col items-start justify-center min-h-[200px] max-h-[220px]", className)}>
            <div className="z-10 flex items-center justify-center w-12 h-12 bg-white rounded-full ring-4 ring-primary">
                {icon}
            </div>
            <div className="mt-4">
                <h3 className="text-lg font-semibold text-primary mb-2">{title}</h3>
                <p className="block text-sm font-normal text-gray-500 mb-2">{label}</p>
                <p className="text-base font-normal text-gray-700 ">{description}</p>
            </div>
        </li>)
}

export default AboutCard