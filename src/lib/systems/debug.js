import { debug as debugStore } from "./../ui/stores"

export default class DebugSystem {
    
    constructor(ecs) {
        this.ecs = ecs
    }

    init() {

    }

    update(dt) {
        debugStore.set({
            //name/value objects
            data: []
        })

    }
}