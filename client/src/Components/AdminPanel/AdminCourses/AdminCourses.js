import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import Button from "../../Form/Button/Button";
import AddEdit from "../AddEdit/AddEdit";
import swal from "sweetalert";
import Pagination from "../../Pgination/Pagination";

export default function AdminCourses() {
  const [coursesData, setCoursesData] = useState([]);
  const [showCourse, setShowCourse] = useState([]);
  const [orderedCourses, setOrderedCourses] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    fetch("http://localhost:4000/v1/courses")
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((data) => {
        setCoursesData(data);
        setOrderedCourses(data)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteUserHandler = (courseID) => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    swal({
      title: "",
      text: "آیا از حذف کاریر اطمینان دارید؟",
      icon: "warning",
      buttons: ["خیر", "بله"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`http://localhost:4000/v1/courses/${courseID}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${localStorageData.token}`,
          },
        }).then((res) => {
          if (res.ok) {
            swal("کاربر مورد نظر با موفقیت حذف گردید", {
              icon: "success",
              buttons: "خروج",
            }).then(() => {
              getData();
            });
          } else {
            swal("مشکلی پیش امده دوباره تلاش کنید", {
              icon: "Error",
              buttons: "خروج",
            });
          }
        });
      } else {
        swal("حذف لغو شد !", {
          icon: "success",
          buttons: "خروج",
        });
      }
    });
  };
  return (
    <>
      <div className='home-content-edit'>
        <AddEdit kind='course' getAllData={getData} usersData={coursesData} />
      </div>
      <DataTable title={"دوره ها"} count={coursesData.length}>
        <table className='table'>
          <thead>
            <tr>
              <th>شناسه</th>
              <th>عنوان</th>
              <th>مبلغ</th>
              <th>وضعیت</th>
              <th>لینک</th>
              <th>مدرس</th>
              <th>دسته بندی</th>
              <th>حذف</th>
            </tr>
          </thead>
          <tbody>
            {showCourse.map((courseData, index) => (
              <tr key={courseData._id}>
                <td>{index + 1}</td>
                <td>{courseData.name}</td>
                <td>
                  {courseData.price === 0
                    ? "رایگان"
                    : courseData.price.toLocaleString()}
                </td>
                <td>
                  {courseData.isComplete === "0"
                    ? "در حال برگذاری"
                    : "تکمیل شده"}
                </td>
                <td>
                  <Button
                    className='btn btn-success'
                    to={`/course-info/${courseData.shortName}`}>
                    مشاهده
                  </Button>
                </td>
                <td>{courseData.creator}</td>
                <td>{courseData.categoryID.title}</td>
                <td>
                  <Button
                    onClick={() => deleteUserHandler(courseData._id)}
                    className='btn btn-danger'>
                    حذف
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </DataTable>
      <Pagination
        items={orderedCourses}
        itemCount={5}
        pathName={`/p-admin/courses`}
        setShow={setShowCourse}
      />
    </>
  );
}
