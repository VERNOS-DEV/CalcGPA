import React, { useEffect, useState } from "react";
import "../CSS/Calculate.css";
import ResTable from "./ResTable";
const Calculate = () => {
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [marks, setMarks] = useState(subjects.map(() => 0));
  const [credits, setCredits] = useState([]);
  const [totalCredits, setTotalCredits] = useState();
  const [totalMarks, setTotalMarks] = useState();
  const [sem, setSem] =useState();
  const [BranchName,setBranchName] = useState("")
  const [scheme,setScheme] = useState();

  const URL = process.env.API_KEY;
  try{
    useEffect(() => {
      const getSchema = async () => {
        fetch("https://vernos-calcgpa.onrender.com/api/getScheme")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
            setBranch(data.data[0].Branch);
          });
        };
      console.log(data)
      getSchema();
    }, []);
  }catch(err){
    alert(err)
  }
  console.log(URL)

  useEffect(() => {
    setCredits(subjects.map((sub) => sub.credit));
  }, [subjects]);

  

  const setForm = () => {
    try{
      const bname = Number(document.getElementById("branchName").value);
    const semester = Number(document.getElementById("semester").value);
    const sch = Number(document.getElementById("scheme").value);

    if (bname === "invalid" || semester === "invalid" || sch === "invalid") {
      alert("Please Select Valid Options");
    }

    else{
      setBranchName(data["data"][0]["Branch"][bname]["branchName"])
      setSem(semester+1)
      setScheme(data["data"][0]["scheme"])
      console.log(data["data"][0]["Branch"][bname]["semesters"][semester]["subjects"]);

    setSubjects(
      data["data"][0]["Branch"][bname]["semesters"][semester]["subjects"]
    );

    const newCredits = subjects.map((sub) => sub.credit);
    setCredits(newCredits);

    document.getElementById("cont2").style.display = "none";
    document.getElementById("tble").style.display = "flex";
    }
    }catch(err){
      alert("Error Occured! something");
    }
  };

 
  console.log(credits);

  const handleInputChange = (index, value) => {
    try{
      const newMarks = [...marks];
      newMarks[index] = parseInt(value, 10);
      if (newMarks[index] > 100 || newMarks[index] < 0) {
      alert("Please Enter valid Marks");
      newMarks[index] = 0;
    } else {
      setMarks(newMarks);
    }
    }catch(err){
      alert("Error Occured!");
    }
    
  };

  console.log(marks);

  const handleSubmit = (e) => {
    e.preventDefault();
    for(let i = 0; i<marks.length; i++){
      if(marks[i]===NaN || marks[i]===undefined){
        alert('All fields are required');
        return;
      }
    }
    const totalMarks = marks.reduce((acc, mark) => acc + mark, 0);
    console.log("Total Marks:", totalMarks);
    setTotalMarks(totalMarks);
    const totalCredits = credits.reduce((acc, credit) => acc + credit, 0);
    console.log("Total Credits:", totalCredits);
    setTotalCredits(totalCredits);
    
    // calSgpa();
    document.getElementById("tble").style.display = "none";
    document.getElementById("rslt").style.display = "flex";
  };

  console.log(BranchName)
  

  return (
    <>
      <div id="cont1">
        <div id="cont2">
          <h3>Enter the following</h3>
          <select name="branchName" id="branchName" required>
            <option value="invalid">Branch</option>
            {branch &&
              branch.length > 0 &&
              branch.map((item, i) => (
                <option key={i} value={i}>
                  {item.branchName}
                </option>
              ))}
          </select>

          <select name="semester" id="semester">
            <option value="invalid">Semester</option>
            <option value="0">Physics Cycle (Sem I/II)</option>
            <option value="1">Chemistry Cycle (Sem I/II)</option>
            <option value="2">Sem III</option>
            <option value="3">Sem IV</option>
          </select>
          <select name="scheme" id="scheme">
            <option value="invalid">Scheme</option>
            <option>2021</option>
          </select>
          <button onClick={setForm}>Start</button>
        </div>
        <form id="tble" style={{ display: "none" }}>
          <div className="row" id="titleRow">
            <div className="subhd">Subject Name</div>
            <div className="crehd">Credits</div>
            <div className="inhd">Marks Obtained</div>
          </div>
          <div className="subs">
            {subjects.map((e, i) => {
              return (
                <div key={i} className="subrow">
                  <div className="subcont">
                    {e.subjectName} &nbsp  ({e.subjectCode})
                  </div>
                  <div className="crecont">{e.credit}</div>
                  <div className="incont">
                    <input
                      type="number"
                      min="0"
                      max="100"
                      onChange={(e) => handleInputChange(i, e.target.value)}
                      required = "true"
                    />
                    <label>Enter Marks Here</label>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row" id='btnrow'>
            <button onClick={handleSubmit} id="calcbtn" type="submit">
              Calculate
            </button>
            <button id="rsetbtn" type="reset">
              Reset
            </button>
          </div>
        </form>
       
        <div className="resConatiner" id="rslt">
          {totalMarks && (
            <ResTable subjects={subjects} marks={marks} credits={credits} branch={BranchName} sem={sem} scheme={scheme} />
          )}

        </div>
        
       
      </div>
    </>
  );
};

export default Calculate;

 {/* <table id="rslt" align="center" border="1" style={{ display: "none" }}>
          <tr>
            <th>Subjects</th>
            <th>Total Credits</th>
            <th>Total Marks</th>
            <th>Grade Point</th>
          </tr>
          {subjects.map((e, i) => {
            return (
              <tr>
                <td>
                  {e.subjectName}({e.subjectCode})
                </td>
                <td align="center">{e.credit}</td>
                <td align="center">{marks[i]}</td>
                <td align="center"></td>
              </tr>
            );
          })}
          <tr>
            <td>Your SGPA is {sgpa}</td>
          </tr>
          <tr>
            <td>
              <button>Download</button>
            </td>
            <td>
              <button>Save</button>
            </td>
          </tr>
        </table> */}


         {/*<div id="rslt" style={{ display: "none" }}>
          <div className="rsltrow">
            <div className="rsubhd">Subject Name</div>
            <div className="rcrehd">Credits</div>
            <div className="mhd">Total Marks</div>
            <div className="gphd">Grade Point</div>
          </div>
          <div className="rsubs">
            {subjects.map((e, i) => {
              return (
                <div key={i} className="rsubrow">
                  <div className="rsubcont">
                    {e.subjectName}({e.subjectCode})
                  </div>
                  <div className="rcrecont">{e.credit}</div>
                  <div className="mcont">{marks[i]}</div>
                </div>
              );
            })}
          </div>
          <div className="rsltrow">
            <div>Your SGPA is {sgpa}</div>
          </div>
          <div className="rsltrow">
            <button onClick="" id="dwldbtn" type="submit">
              Download
            </button>
            <button id="svbtn" type="reset">
              Save
            </button>
          </div>
        </div> */}


        // const calSgpa = () => {
  //   console.log("Needed marks" + marks);
  //   console.log("Needed credits" + credits);

  //   var gmarks = [0];

  //   for (let i = 0; i < marks.length; i++) {
  //     if (marks[i] > 90 && marks[i] <= 100) {
  //       gmarks[i] = 10;
  //     } else if (marks[i] > 80 && marks[i] <= 90) {
  //       gmarks[i] = 9;
  //     } else if (marks[i] > 70 && marks[i] <= 80) {
  //       gmarks[i] = 8;
  //     } else if (marks[i] > 60 && marks[i] <= 70) {
  //       gmarks[i] = 7;
  //     } else if (marks[i] > 50 && marks[i] <= 60) {
  //       gmarks[i] = 6;
  //     } else if (marks[i] > 40 && marks[i] <= 50) {
  //       gmarks[i] = 5;
  //     } else if (marks[i] > 30 && marks[i] <= 40) {
  //       gmarks[i] = 4;
  //     } else {
  //       gmarks[i] = 0;
  //     }
  //   }
  //   console.log("Grade point" + gmarks);
  //   setGradePoint(gmarks);

  //   var totalgrade = 0;
  //   for (let j = 0; j < marks.length; j++) {
  //     totalgrade += gmarks[j] * credits[j];
  //   }
  //   console.log("Total grades" + totalgrade);

  //   var tsgpa = totalgrade / totalCredits;
  //   var sgpa = tsgpa.toFixed(2);
  //   console.log("SGPA " + sgpa);
  //   setSgpa(sgpa);
  // };


  // const getSchema = async () => {
  //   fetch("http://localhost:4552/api/getScheme")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       // console.log(data["data"][0]["Branch"][0]["semesters"][0]);
  //       setData(data);
  //     });
  // };

  // getSchema();
  // console.log(data);

  // useEffect(() => {}, [branchno, semno]);
