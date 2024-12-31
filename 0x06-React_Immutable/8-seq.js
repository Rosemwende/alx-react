import { Seq } from 'immutable';

export default function printBestStudents(grades) {
  const result = Seq(grades)
    .filter((student) => student.score >= 70)
    .map((student) => ({
      firstName: student.firstName.charAt(0).toUpperCase() + student.firstName.slice(1),
      lastName: student.lastName.charAt(0).toUpperCase() + student.lastName.slice(1)
    }));

  result.forEach((student) => {
    console.log(`${student.firstName} ${student.lastName}`);
  });

  return result.toJS();
}
