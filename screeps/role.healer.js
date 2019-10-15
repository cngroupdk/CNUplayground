let roleHealer = {
    run: function(creep) {
        let isCreepDamaged = false;
        let closestDamagedUnit = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
            filter: function (creeper) {
                return creeper.hits < creeper.hitsMax;
            }
        });
        closestDamagedUnit === null? isCreepDamaged = false : isCreepDamaged = true;
        
        if (isCreepDamaged) {
            if(creep.heal(closestDamagedUnit) === ERR_NOT_IN_RANGE) {
                creep.moveTo(closestDamagedUnit, {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('healing');
            }
        }
        
        if (!isCreepDamaged) {
            let closestAttackUnit = creep.pos.findClosestByPath(FIND_MY_CREEPS, {
                filter: function (creeper) {
                    return creeper.getActiveBodyparts(ATTACK) || creeper.getActiveBodyparts(RANGED_ATTACK);
                }
            });
            if (closestAttackUnit !== null) {
                //if (creep.pull(closestAttackUnit) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(closestAttackUnit);
               // }
            }
            else if (closestAttackUnit === null){
                creep.moveTo(Game.spawns['Spawn1']);
                creep.say('going home');
            }
        }
    }
}
module.exports = roleHealer;