import React from "react";
import MainNavBar from "../components/MainNavBar";
import Footer from "../components/Footer";
import '../styles.css'
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";

const ChildBook = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  const [child, setChild] = useState(null);
  const [books, setBooks] = useState([]);
  const [uname, setName] = useState("");
  const [userType, setUserType] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [password, setPassword] = useState("");


  useEffect(() => {
    axios
      .get("http://18.205.107.88:31480/api/book")
      .then((response) => {
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });

      axios
      .get(`http://18.205.107.88:31479/api/user/${id}`)
      .then((response) => {
        setChild(response.data.data);
        setName(response.data.data.name);
        setUserType(response.data.data.userType);
        setCreatedDate(response.data.data.createdDate);
        setPassword(response.data.data.password);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  },[]);

  // async function UpdateUserBook(e) {
  //   e.preventDefault();
  //   const userData = {
  //     name,
  //     rating,
  //     category,
  //     noOfPages,
  //     author,
  //     bookId
  //   };
  //   // console.log(userData,"user");
  //     console.log(userData, "userdata");
  //     axios
  //       .put(`http://18.205.107.88:31479/api/user/${id}`, userData)
  //       .then(function (response) {
  //         // console.log(response.data.data.userType);
  //         localStorage.setItem("user", JSON.stringify(response.data.data));
  //         setId("");
  //         setPassword("");
  //         swal({
  //           text: "Added Successful",
  //           icon: "success",
  //           buttons: {
  //             cancel: { text: "Cancel" },
  //             confirm: { text: "Ok" },
  //           },
  //         })
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //         alert("Added Failed");
  //       });
  // }
  


  return (
    <div>
      <MainNavBar />
      <br />
      <br />

      <div class="container pt-4">
        {/* <!-- Section: Main chart --> */}
        <section class="mb-4">
          <div class="card">
            <div class="card-header py-3">
              <h5 class="mb-0 text-center">
                <strong>Child's Current Reading Book</strong>
              </h5>
            </div>
            <div class="card-body">
              {/* <canvas class="my-4 w-100" id="myChart" height="380"></canvas> */}
              <div className="d-flex justify-content-center align-items-center vh-50">
                <div
                  className="card card-style"
                  style={{ width: "75%", minHeight: "200px" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{child?.readingBook?.name}</h5>
                    <p className="card-text">{child?.readingBook?.author}</p>
                    <p className="card-text">
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </p>
                  </div>
                  <img
                    src="https://ksr-ugc.imgix.net/assets/039/479/483/209057c7195c4a518f7bf1d5877b460c_original.jpg?ixlib=rb-4.1.0&crop=faces&w=1552&h=873&fit=crop&v=1671210374&auto=format&frame=1&q=92&s=6ff85bee9a771cf9122c92160c2b3427"
                    className="card-img-bottom"
                    alt="Camera"
                    style={{ maxHeight: "300px" }}
                  />
                  <div class="card-footer text-muted">
                    <div class="progress" style={{ height: "20px" }}>
                      <div
                        class="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${
                            (child?.noOfPagesRead /child?.readingBook?.noOfPages) * 100}%`,
                        }}
                        aria-valuenow={(
                          (child?.noOfPagesRead / child?.readingBook?.noOfPages) * 100).toString()}
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        {`${(child?.noOfPagesRead / child?.readingBook?.noOfPages) * 100}%`}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <div class="container pt-4">
        {/* <!-- Section: Main chart --> */}
        <section class="mb-4">
          <div class="card">
            <div class="card-header py-3">
              <h5 class="mb-0 text-center">
                <strong>Completed Reading Book List</strong>
              </h5>
            </div>
            <div class="card-body">
              <div className="container mt-4">
                <div className="row">
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="card card-style">
                      <div className="card-body">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="container pt-4">
        {/* <!-- Section: Main chart --> */}
        <section class="mb-4">
          <div class="card">
            <div class="card-header py-3">
              <h5 class="mb-0 text-center">
                <strong>Next Readings</strong>
              </h5>
            </div>
            <div class="card-body">
              <div className="container mt-4">
                <div className="row">
                  {books?.map((book) => (
                    <div className="col-md-3" key={book?.bookId}>
                      <div class="card card-style">
                        <div class="card-body">
                          <h5 class="card-title">{book?.name}</h5>
                          <p class="card-text">{book?.author}</p>
                          <p class="card-text">{book?.category}</p>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-mdb-ripple-init
                            onClick={() =>
                              UpdateUserBook({
                                bookId: book?.bookId,
                                name: book?.name,
                                author: book?.author,
                                category: book?.category,
                                rating: book?.rating,
                                noOfPages: book?.noOfPages,
                              })
                            }
                          >
                            Read
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default ChildBook;