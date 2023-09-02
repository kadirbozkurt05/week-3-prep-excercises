import { modules, students, mentors, classes } from "./hyf.js";

const getPeopleOfClass = (className) => {
  const currentModuleOfClass = classes.find(classItem=>classItem.name===className).currentModule;
  const mentorsTeachModule = mentors.filter(mentor=>mentor.nowTeaching===currentModuleOfClass).map(mentor=>{
    return {name:mentor.name,role:'mentor'}
});

  const studentsOfClass = students.filter(student=>student.class===className).map(student=>{
    return {name:student.name,role:'student'}
  });

  const studentsAndMentors = [...mentorsTeachModule,...studentsOfClass]


return studentsAndMentors;
};
console.log(getPeopleOfClass('class34'));

const getActiveClasses = () => {
  const activeClasses = classes.filter(classItem=>classItem.active);

  const result = {};
  activeClasses.forEach(classItem=>{
    result[classItem.name]=getPeopleOfClass(classItem.name);
  })

  return result;
};


console.log(getActiveClasses());