import { Map, fromJS } from 'immutable';

export function printBestStudents(grades) {
  const students = fromJS(grades);

  students
    .filter(student => student.get('score') >= 70)
    .forEach(student => {
      const firstName = student.get('firstName').charAt(0).toUpperCase() + student.get('firstName').slice(1);
      const lastName = student.get('lastName').charAt(0).toUpperCase() + student.get('lastName').slice(1);
      console.log(`${firstName} ${lastName}`);
    });
}
