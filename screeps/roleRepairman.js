var roleRepairman = {

    /** @param {Creep} creep **/
    run: function(creep) {
        // Go harvest energy, if you have none.
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    // Build if you have energy.
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }       
        // Repair a road if necessary.
	    if(creep.memory.building) {
	        const needsRepair = function(object){
                return object.structureType === STRUCTURE_ROAD && (object.hits < (object.hitsMax / 10));
            };
	        let roadToRepair = creep.room.find(FIND_STRUCTURES, {filter: needsRepair});
            creep.moveTo(roadToRepair);
            creep.repair(roadToRepair);
        }
        
	    else {
	        var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleRepairman;