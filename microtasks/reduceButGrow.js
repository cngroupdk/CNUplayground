/** Reduce but Grow */

function grow(x){
    return x.reduce((acc, cur) => {return acc * cur})
};