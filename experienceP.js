function expPattern(update_arr){
var expArr=[],expFinal=[],designation=[],duration=[]
var exp=/^(Experience|EXPERIENCE)$/g
let keyUpgrade = /^(Summary of Qualification(|s)|PROFESSIONAL TRAINING(|&amp;) PROJECTS|Qualitative Skill(|s)|Additional Skill(|s)|Campus Activitie(|s)|ACADEMIC CREDENTIAL(|S)|career summary|key project(|s)|Technical Skill(|s)|ACADEMIC QUALIFICATION(|s)|Professional Summary|PROFESSIONAL TRAINING & PROJECTS|Summary|Professional Objective|Employment Objective|Career Objective|Objective|Career Goal|Five Year Plan|Interests (|and) (|Hobbies)|Employment History|PROFESSIONAL DOSSIER|Work History|Work Experience|(Professional Experience(|s))|Professional Background|Preference(|s)|Additional Experience|Career Related Experience|Related Experience|Industry Experience|Accounting Experience|Freelance Experience|Freelance|Army Experience|Military Experience|Strength(|s)|Military Background|Experience|Academic Background|Academic Experience|Program(|s)|Related Course(|s)|Course(|s)|Education and Training|Education|Educational Background|Educational Qualification(|s)|Educational Training|Academic Training|Apprenticeship(|s)|College Activitie(|s)|Certification(|s)|Special Training|Training|Activities and Honor(|s)|Affiliation(|s)|Professional Affiliation(|s)|Professional Association(|s)|Association(|s)|Professional Membership(|s)|Membership(|s)|Athletic Involvement|Community Involvement|Civic Activitie(|s)|Extra-Curricular Activitie(|s)|POSITIONS OF RESPONSIBILITY|Reporting|EXTRA CURRICULAR (|ACHIEVEMENT(|s)|Activities)|Extra\\-?curricular|Professional Activitie(|s)|Volunteer Work|Volunteer Experience|Publication(|s)|Presentation(|s)|Convention(|s)|Credential(|s)|Skills (|&|and) Expertise|Qualification(|s)|Areas of Experience|Areas of Expertise|Areas of Knowledge|Career Related Skill(|s)|Professional Skill(|s)|Specialized Skill(|s)|Computer Skill(|s)|Computer Knowledge|Software|Technologie(|s)|Technical Experience|Proficiencie(|s)|Language Competencies and Skill(|s)|Programming Language(|s)|Relevant Skills|Technology Skill(|s)|Skill(|s)|Academic Honor(|s)|Academic(|s)|Honor(|s)|Professional Development|Internship and Research Projects|Accolade(|s)|Endorsement(|s)|Achievement(|s)|Award(|s)|Distinction(|s)|Fellowship(|s)|Scholarship(|s)|Hobbie(|s)|Personal Interest(|s)|Strength(|s)|Interest(|s)|Miscellaneou(|s)|personal project(|s)|Procedures|group project(|s)|other project(|s)|project(|s)|(Language(|s)[ ]Proficiency)|Language(|s)|personal detail(|s)|Accomplishment(|s)|personal information|SAP HCM SKILLS|OTHER EDUCATIONAL QUALIFICATION DETAILS|Declaration|Awards|Honors and Awards)$/g
// var exper=update_arr.join()
for(let i=0;i<update_arr.length;i++){
  if(update_arr[i].match(exp)){
    for(let j=i+1;j<update_arr.length;j++){
      expArr[j]=update_arr[j]
    }
    //  console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',expArr)
    for(let j=0;j<expArr.length;j++){
      if(expArr[j]!=undefined&&expArr[j]!=''&&expArr[j]!=null&&expArr[j].match(keyUpgrade)){
        for(l=0;l<j;l++){
          expFinal[l]=expArr[l]
        }
        break;
      }
    }
    break;
  }          
}
expFinal=expFinal.filter(n=>n!=undefined&&n!='')
console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',expFinal)
expR=/(\b([A-Z][a-z]+\s*)*(at)(\s[A-Z][a-z]*)+)/g
expR1=/(\b([A-Z][a-z]+\s*)*(at)?(\s[A-Z][a-z]*)+)/g
expR2=/^(\b([A-Z][a-z]+\s*))$/g
var j=0;
descFinal=[]
for(let i=0;i<expFinal.length;i++){
  if(expFinal[i]!=undefined){
  if(expFinal[i].match(expR)&&expFinal[i].length<90){
    designation[j]=expFinal[i];
    j++;
  }
  else if(expFinal[i].match(expR1)&&expFinal[i].length<25){
    designation[j]=expFinal[i];
    j++;
  }
  else if(expFinal[i].match(expR2)&&expFinal[i].length<15){
    designation[j]=expFinal[i];
    j++;
  }
}
}
console.log('$$$$$$$$$$$$$$$$$$$$$DESIGNATION$$$$$$$$$$$$$$$$$$$$$$$$',designation)

var str=expFinal.join('$$')
var reg='';
for(i=0;i<designation.length;i++){
    if(i==designation.length-1){
   reg=reg+designation[i]}
   else{
    reg=reg+designation[i]+'|'  
   }
}
var regex=new RegExp(reg,'g')
// console.log(regex)
var description=str.split(regex)
description.shift()
description=description.filter(n=>n!=undefined&&n!='')
// console.log('$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$',description)
for(i=0;i<description.length;i++){
var des=description[i].split('$$')
var flag=0
des.shift()
if(des.length!=1){
des.pop()
}
// console.log(des)
for(j=0;j<des.length;j++){
if(des[j].match(/((january|february|march|april|may|june|july|august|september|october|november|december)\s{0,1})?\d{4}\s{0,1}(-|to)\s{0,1}((january|february|march|april|may|june|july|august|september|october|november|december)(\s{0,1}\d{4}))?(present)?(\d{4})?/gi)&&des[j].length<50){
    duration[i]=des[j]
    flag=1;
    break;
}
}
if(flag==0){
  duration[i]='';
}
str=des.join('$$')
if(str.includes(duration[i])){
  // console.log(duration[i])
  str=str.replace(duration[i],'')
  des=str.split('$$')
  des=des.filter(n=>n!=undefined&&n!='')
descFinal.push(des)
}
}
duration=duration.filter(n=>n!=undefined)
console.log('$$$$$$$$$$$$$$$$$$$$$$DURATION$$$$$$$$$$$$$$$$$$$$$$$$$$$$',duration)
console.log('$$$$$$$$$$$$$$$$$$$$$$DESCRIPTION$$$$$$$$$$$$$$$$$$$$$$$$$$$$',descFinal)
if(duration.length==0&&descFinal.length==0&&designation.length>0){
  for(i=0;i<designation.length;i++){
    if(designation[i].match(/((january|february|march|april|may|june|july|august|september|october|november|december)\s{0,1})?\d{4}\s{0,1}(-|to)\s{0,1}((january|february|march|april|may|june|july|august|september|october|november|december)(\s{0,1}\d{4}))?(present)?(\d{4})?/gi)){
      var match=designation[i].match(/((january|february|march|april|may|june|july|august|september|october|november|december)\s{0,1})?\d{4}\s{0,1}(-|to)\s{0,1}((january|february|march|april|may|june|july|august|september|october|november|december)(\s{0,1}\d{4}))?(present)?(\d{4})?/gi)
      duration[i]=match[0]
      designation[i]=designation[i].replace(match[0],'')
      descFinal[i]=''  
    }
    else{
      duration[i]=''
      descFinal[i]=''
    }
  }
}
console.log('$$$$$$$$$$$$$$$$$$$$$$DESIGNATION$$$$$$$$$$$$$$$$$$$$$$$$$$$$',designation)
console.log('$$$$$$$$$$$$$$$$$$$$$$DURATION$$$$$$$$$$$$$$$$$$$$$$$$$$$$',duration)
console.log('$$$$$$$$$$$$$$$$$$$$$$DESCRIPTION$$$$$$$$$$$$$$$$$$$$$$$$$$$$',descFinal)
}

module.exports={expPattern}