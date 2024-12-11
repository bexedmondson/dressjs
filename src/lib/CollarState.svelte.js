import { isDisabled } from "./choices.svelte"

export class CollarState{
    name = ""
    category = ""
    disabled = $state(false)

    constructor(name, category) {
        this.name = name;
        this.category = category;
        this.updateValue()
    }

    updateValue() {
        const t = isDisabled(this.category, this.name)
        this.disabled = t;
    }
}