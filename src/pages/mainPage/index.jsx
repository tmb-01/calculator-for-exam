import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Quiz1 from "../quiz1";
import Quiz10 from "../quiz10";
import Quiz11 from "../quiz11";
import Quiz2 from "../quiz2";
import Quiz3 from "../quiz3";
import Quiz4 from "../quiz4";
import Quiz5 from "../quiz5";
import Quiz6 from "../quiz6";
import Quiz7 from "../quiz7";
import Quiz9 from "../quiz9";

function MainPage() {
  return (
    <div style={{ padding: "20px" }}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <h1>Exam list</h1>
              <Link to={"/ieec"}>IEEC</Link>
            </div>
          }
        />
        <Route
          path="/ieec"
          element={
            <div>
              <Link to="/">Go Back</Link>
              <h1>IEEC</h1>
              <ul>
                <li>
                  <Link to={"/ieec/1"}>Quiz 1</Link>
                </li>
                <li>
                  <Link to={"/ieec/2"}>Quiz 2</Link>
                </li>
                <li>
                  <Link to={"/ieec/3"}>Quiz 3</Link>
                </li>
                <li>
                  <Link to={"/ieec/4"}>Quiz 4</Link>
                </li>
                <li>
                  <Link to={"/ieec/5"}>Quiz 5</Link>
                </li>
                <li>
                  <Link to={"/ieec/6"}>Quiz 6</Link>
                </li>
                <li>
                  <Link to={"/ieec/7"}>Quiz 7</Link>
                </li>
                <li>
                  <Link to={"/ieec/9"}>Quiz 9</Link>
                </li>
                <li>
                  <Link to={"/ieec/10"}>Quiz 10</Link>
                </li>
                <li>
                  <Link to={"/ieec/11"}>Quiz 11</Link>
                </li>
              </ul>
            </div>
          }
        />
        <Route path="/ieec/1" element={<Quiz1 />} />
        <Route path="/ieec/2" element={<Quiz2 />} />
        <Route path="/ieec/3" element={<Quiz3 />} />
        <Route path="/ieec/4" element={<Quiz4 />} />
        <Route path="/ieec/5" element={<Quiz5 />} />
        <Route path="/ieec/6" element={<Quiz6 />} />
        <Route path="/ieec/7" element={<Quiz7 />} />
        <Route path="/ieec/9" element={<Quiz9 />} />
        <Route path="/ieec/10" element={<Quiz10 />} />
        <Route path="/ieec/11" element={<Quiz11 />} />
      </Routes>
    </div>
  );
}

export default MainPage;
