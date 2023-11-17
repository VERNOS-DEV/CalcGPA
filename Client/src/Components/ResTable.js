import React, { useEffect, useState } from "react";
import "../CSS/Restable.css";
const ResTable = ({ subjects, marks, credits, sem, branch, scheme }) => {
  const [totalMarks, setTotalMarks] = useState(0);
  const [sgpa, setSgpa] = useState(0);
  const [obtainedCredit, setObtainedCredit] = useState([]);
  useEffect(() => {
    const tm = marks.reduce((acc, mark) => acc + mark, 0);
    setTotalMarks(tm);
    var gmarks = [0];
    var grade = [0];
    for (let i = 0; i < marks.length; i++) {
      if (marks[i] > 90 && marks[i] <= 100) {
        gmarks[i] = 10;
        grade[i] = "O";
      } else if (marks[i] > 80 && marks[i] <= 90) {
        gmarks[i] = 9;
        grade[i] = "A+";
      } else if (marks[i] > 70 && marks[i] <= 80) {
        gmarks[i] = 8;
        grade[i] = "A";
      } else if (marks[i] > 60 && marks[i] <= 70) {
        gmarks[i] = 7;
        grade[i] = "B+";
      } else if (marks[i] > 50 && marks[i] <= 60) {
        gmarks[i] = 6;
        grade[i] = "B";
      } else if (marks[i] > 40 && marks[i] <= 50) {
        gmarks[i] = 5;
        grade[i] = "C+";
      } else if (marks[i] > 30 && marks[i] <= 40) {
        gmarks[i] = 4;
        grade[i] = "C";
      } else {
        gmarks[i] = 0;
        grade[i] = "F";
      }
    }
    var gpa = 0;
    var tgpa = 0;
    for (let i = 0; i < subjects.length; i++) {
      if (marks[i] || gmarks[i]) {
        gpa += credits[i] * gmarks[i];
      }
      tgpa += credits[i];
    }
    setObtainedCredit(gmarks.map((s, i) => credits[i] * gmarks[i]));
    const finalSgpa = (gpa / tgpa).toFixed(3);

    setSgpa(finalSgpa);
    setSgpa(finalSgpa);
    setSgpa(finalSgpa);
    console.log(gpa, "  ", tgpa, "  ");
    console.log(marks);
    console.log(sgpa);
    console.log(obtainedCredit);
  }, [marks, subjects, credits, obtainedCredit, sgpa]);
  useEffect(() => {
    console.log("Updated sgpa:", sgpa);
    console.log("Obtained Credits:", obtainedCredit);
  }, [sgpa, obtainedCredit]);
  return (
    <>
      <div className="container_table">
        <div className="detail_cont">
          <div className="Branch">Branch : {branch}</div>
          <div className="sem">Semester : {sem}</div>
          <div className="scheme">Scheme : {scheme}</div>
        </div>
        <table className="res-table" border={0}>
          <thead>
            <tr>
              <th scope="col" colSpan="2" id="th">
                Subjects
              </th>
              <th scope="col">Credit</th>
              <th scope="col">Marks Obtained</th>
              <th scope="col">Grade/ Obtained Credit</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((subject, index) => (
              <tr key={index}>
                <td colSpan={2} id="sub">
                  {subject.subjectName}
                </td>
                <td id="cre">{subject.credit}</td>
                <td id="marks">{marks[index]}</td>
                <td id="grade">{obtainedCredit[index]}</td>
              </tr>
            ))}
            <tr className="empty res"></tr>
            <tr className="res">
              <td colSpan={3} className="tm">
                Total Marks{" "}
              </td>
              <td className="tm">{totalMarks}</td>
              <td className="tm">
                {obtainedCredit.reduce((acc, cre) => acc + cre, 0)}
              </td>
            </tr>
            <tr className="res">
              <td colSpan={3} className="tm">
                SGPA
              </td>
              <td colSpan={2} className="tm">
                {sgpa}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ResTable;
