export const API_KEY='AIzaSyB6zn8hBmtr_DbU_vGT2FaIXE6wEOe1Y2I';
export const value_converter=(value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K"
    }
    else{
        return value;
    }
}