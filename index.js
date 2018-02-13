function breakOut(array, changeValue, stopValue){

     for (let i = 0; i<array.length; i++){



       if (changeValue[i] == stopValue){
         array[i]=changeValue;
         break;
        }


    }
return array;
}
