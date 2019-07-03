export const assemblages = {
    player: {
        components: ["player", "position", "health", "controllable"],
        data: {
            player: {
                desc: "Alex"
            },
            health: {
                value: 100
            }
        }        
    },
    zombie: {
        components: ["zombie", "position", "health"],
        data: {
            health: {
                value: 30
            }
        }        
    }
}