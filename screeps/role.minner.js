let roleMinner = {
    run: function(creep) {
        let sources = creep.room.find(FIND_SOURCES);
        if(creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
    }
}



module.exports = roleMinner;