const addToDb=some=>{
    const exist=localStorage.getItem(some);
    if(!exist){
        localStorage.setItem(some,1);
    }
    else{
        const newCount=parseInt(exist)+1;
        localStorage.setItem(some,newCount);
    }
}
export{addToDb};