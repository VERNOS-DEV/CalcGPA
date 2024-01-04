import React, { useEffect, useRef, useState } from "react";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import "../CSS/Restable.css";
import File from './file.png';

const ResTable = ({ subjects, marks, credits, sem, branch, scheme }) => {

  // useRef if used to download the result
  
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
  
  //Download button for downloading resluts
  const [generatingPDF, setGeneratingPDF] = useState(false);
  const pdfRef = useRef();
  const downloadPDF = () =>{
      const input = pdfRef.current;
      html2canvas(input, {
        onclone: (clonedDoc) => {
          const downloadButton = clonedDoc.querySelector(".Download-btn");
          if (downloadButton) {
            downloadButton.style.display = "none"; // Hide the button in the cloned content
          }
        },
      }).then((canvas) => {
      const resImg = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imgWidth, pdfHeight/imgHeight);
      const imgX = (pdfWidth - imgWidth*ratio)/2;
      const imgY = 30;
      pdf.addImage(resImg, 'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
      pdf.save('Result.pdf');
    });
  };

  return (
    <>
      
      <div className="container_table" ref={pdfRef}>
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
      <div className="download_btn_container">
        {/* <button className="Download-btn" onClick={downloadPDF}>Download Result</button> */}

        {!generatingPDF && (
            <button className="Download-btn" onClick={downloadPDF}>
              {/* <img src={File} alt="" /> */}
         
              <svg xmlns="http://www.w3.org/2000/svg" height="32" width="24" viewBox="0 0 384 512"><path fill="#ffffff" d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/></svg>
            </button>
          )}
      </div>
      </div>
    </>
  );
};

export default ResTable;
