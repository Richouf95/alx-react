import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seq = Seq(object);

  function initiales(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const bestStudents = seq.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  const studentObj = bestStudents.toJS();

  Object.keys(studentObj).map((key) => {
    studentObj[key].firstName = initiales(studentObj[key].firstName);
    studentObj[key].lastName = initiales(studentObj[key].lastName);
    return studentObj[key];
  });

  console.log(studentObj);
}
