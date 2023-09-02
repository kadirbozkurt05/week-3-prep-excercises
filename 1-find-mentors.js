import { modules, students, mentors, classes } from "./hyf.js";

const possibleMentorsForModule = (moduleName) => {
    const mentorsCanTeachModule = mentors.filter(mentor=>(mentor.canTeach).includes(moduleName));
    return mentorsCanTeachModule.map(mentor=>mentor.name);


};
console.log(possibleMentorsForModule('using-apis'));

const findMentorForModule = (moduleName) => {
    const listOfMentors = possibleMentorsForModule(moduleName);
    const randomNumber = Math.floor(Math.random()*listOfMentors.length);
    return listOfMentors[randomNumber];

};
console.log(findMentorForModule('javascript'));

