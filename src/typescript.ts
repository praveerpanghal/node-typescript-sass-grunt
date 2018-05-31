interface IuserName {
    fName:string;
    lName:string;
}

var displayName: IuserName = {

    fName:'Praveer',
    lName:'Panghal is my name  '

}

document.getElementById('para').innerHTML=displayName.fName + displayName.lName+' is my name';