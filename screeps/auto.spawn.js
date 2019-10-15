let autoSpawn = {
    run: function(spawnName, creepRole, wantedQuantity) {
        let creeper = _.filter(Game.creeps, (creep) => creep.memory.role === creepRole);
         
        if(creeper.length < wantedQuantity) {
            const newName = creepRole + Game.time;
            switch(creepRole) {
                
                case 'harvester':
                    Game.spawns[spawnName].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, {
                        memory: { role: creepRole }});
                    break;
                case 'builder':
                    Game.spawns[spawnName].spawnCreep([WORK, WORK, CARRY, CARRY, MOVE, MOVE, MOVE], newName, {
                        memory: { role: creepRole }});
                    break;
                case 'upgrader':
                    Game.spawns[spawnName].spawnCreep([WORK, WORK, WORK, CARRY, CARRY, MOVE, MOVE], newName, {
                        memory: { role: creepRole }});
                    break;
                case 'minner':
                    Game.spawns[spawnName].spawnCreep([WORK, WORK, WORK, MOVE, MOVE], newName, {
                        memory: { role: creepRole }});
                case  'attacker':
                    Game.spawns[spawnName].spawnCreep([ATTACK, ATTACK, ATTACK, TOUGH, TOUGH, MOVE, MOVE, MOVE], newName, {
                        memory: { role: creepRole }});
                }
        }
    }
}

module.exports = autoSpawn;