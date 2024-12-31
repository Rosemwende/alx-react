import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  Seq(grades)
    .filter((student) => student.score >= 70)
    .forEach((student) => {
      const firstName = student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1);
      const lastName = student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1);
      console.log(`${firstName} ${lastName}`);
    });
}
