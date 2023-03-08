export const FormatDate = (date: string): string => {
  let year =  date.substring( 0, 4 );
  let month = validate(date.substring(5,7));
  let day = validate(date.substring(8,10));
  let hour = date.substring(11,13);
  let minute = date.substring(14,16);
  
  const format = `${year}年${month}月${day}日 ${hour}:${minute}`;
    return format;
  };

const validate = (date:string)=>{
  if(Number(date[0]) === 0){
    return Number(date[1]);
  }
  return date
}
