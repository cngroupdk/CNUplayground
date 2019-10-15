let roleRangeAttacker = {
    run: function(creep) {
        let closestHostile = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if(creep.rangedAttack(closestHostile) === ERR_NOT_IN_RANGE) {
                creep.moveTo(closestHostile, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
    }
}
module.exports = roleRangeAttacker;