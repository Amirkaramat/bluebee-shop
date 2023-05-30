import React, { useState } from "react";

import Button from "../../Form/Button/Button";
import AddUser from "./AddUser/AddUser";
import AddCategory from "./AddCategory/AddCategory";
import AddCourse from "./AddCourse/AddCourse";
import EditUser from "./EditUser/EditUser";
import EditCourse from "./EditCourse/EditCourse";
import EditCategory from "./EditCategory/EditCategory";
export default function AddEdit({ kind, usersData, getAllUser }) {
  const [activeBtn, setActiveBtn] = useState("");
  const [showEditInput, setShowEditInput] = useState(false);

  const btnChangeHandler = (btnValue) => {
    setActiveBtn(btnValue);
    if (btnValue === "edit-btn") {
    } else {
      setShowEditInput(false);
    }
  };

  return (
    <>
      <div className='button-container m-4 d-flex justify-content-evenly'>
        <Button
          className={`add-btn ${activeBtn === "add-btn" && "active"}`}
          onClick={() => btnChangeHandler("add-btn")}>
          افزودن
        </Button>
        <Button
          className={`edit-btn ${activeBtn === "edit-btn" && "active"}`}
          onClick={() => btnChangeHandler("edit-btn")}>
          ویرایش
        </Button>
        {activeBtn !== "" && (
          <Button
            className={`close-btn ${activeBtn === "" && "active"}`}
            onClick={() => btnChangeHandler("")}>
            بستن
          </Button>
        )}
      </div>
      {activeBtn === "add-btn" && kind === "user" && (
        <AddUser getAllUser={getAllUser} />
      )}
      {activeBtn === "edit-btn" && kind === "user" && (
        <EditUser
          showEditInput={showEditInput}
          setShowEditInput={setShowEditInput}
          usersData={usersData}
        />
      )}
      {activeBtn === "add-btn" && kind === "course" && (
        <AddCourse getAllUser={getAllUser} />
      )}
      {activeBtn === "edit-btn" && kind === "course" && (
        <EditCourse
          showEditInput={showEditInput}
          setShowEditInput={setShowEditInput}
          usersData={usersData}
        />
      )}
      {activeBtn === "add-btn" && kind === "category" && (
        <AddCategory getAllUser={getAllUser} />
      )}
      {activeBtn === "edit-btn" && kind === "category" && (
        <EditCategory
          showEditInput={showEditInput}
          setShowEditInput={setShowEditInput}
          usersData={usersData}
        />
      )}
    </>
  );
}
