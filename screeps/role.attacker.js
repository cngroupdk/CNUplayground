let roleAttacker = {
    run: function(creep) {
        let closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(creep.attack(closestHostile) === ERR_NOT_IN_RANGE) {
                creep.moveTo(closestHostile, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
    }
}
module.exports = roleAttacker;