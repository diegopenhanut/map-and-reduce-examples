a = [
    {"id": "a", "value": 4}, 
    {"id": "b", "value": 2}, 
    {"id": "b", "value": 1}, 
    {"id": "c", "value": 3}, 
    {"id": "a", "value": 5}, 
    {"id": "b", "value": 7}, 
    {"id": "b", "value": 8}, 
    {"id": "c", "value": 9}, 
    ]
function multby2Map (){
    return a.map(function(i){
        i.value=i.value*2;
        return i.value;
        })
}
function countUsingMap (){
    var hist = {};
    a.map(function(i){
        if (i.id in hist){
         hist[i.id] ++;   
        } else {
            hist[i.id]=1;
        }
        //return hist;
        })
    return hist;
}

function sumAll (){
var s = a.map(function(i){
        return i.value;
        }).reduce(function(last, now){
        return last + now
        }, 0)

return s;
}

function countId (){
return a.reduce(function(map, item){
    map[item.id] = (map[item.id]||0)+1;
    return map;
}, {} );

}

function sumId (){
return a.reduce(function(map, item){
    map[item.id] = (map[item.id]||0)+item.value;
    return map;
}, {} );

}