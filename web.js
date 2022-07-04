function validateBasic(){
    var name=document.basic.name.value;
    var email=document.basic.email.value;
    var subject=document.basic.subject.value;

    if(name<10){
    alert("Name required");
    return false;    

    }

}   if(email<10){
    alert("email required");
    return false

}
    if(subject<10){
    alert("subject required");
    return false


}
