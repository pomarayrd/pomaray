import { Button } from "@nextui-org/react"
import type { RetryButtonProps } from "./types"

function RetryButton({ onTry, color }: RetryButtonProps) {
    return (
        <Button
            size="sm"
            radius="sm"
            variant="light"
            aria-label="Volver a intentarlo"
            onPress={onTry}
            color={color}
        >
            Volver a intentarlo.
        </Button>
    )
}

export default RetryButton