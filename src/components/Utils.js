export function formatDollars(dollars) {
    dollars = (Math.round(dollars * 100) / 100).toFixed(2);
    dollars = dollars.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return dollars;
  }
  
export function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}
function handleTodoResponse(mainObj,  resp ){
    // to combine  
    let resultObj = 
    {
        ...mainObj,
        "data" : resp
    }
    return resultObj;

}
/*
[
    {
        "groupName" : "Settle the bills",
        "groupId" : "1",
        "items" : 
            [
                {
                    "itemName" : "Mobile phone fee" , 
                    "itemId" : "2"    
                },
                {
                    "itemName" : "Electrical fee" , 
                    "itemId" : "3"    
                }
            ]
    },
    {
        "groupName" : "Watch House of cards",
        "groupId" : 2,
        "items" : 
            [
                {
                    "itemName" : "Mobile phone fee" , 
                    "itemId" : "4"    
                },
                {
                    "itemName" : "Electrical fee" , 
                    "itemId" : "5" 
                }
            ]
    }
]*/


function testing(todoFullData , command, id , valueStr ) {
    let todoFullDataNew = JSON.parse(JSON.stringify(todoFullData));
    console.log(JSON.stringify(todoFullDataNew));
    if ( command == 'CREATE_GROUP') {
        let tmp = {groupName:valueStr, groupId:id, items :[]};
        todoFullDataNew.push(tmp);
        
    }


    return todoFullDataNew;
      
    
}