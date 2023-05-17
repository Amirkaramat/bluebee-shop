import React from "react";
import CourseInfoRegister from "../CourseInfoRegister/CourseInfoRegister";
import CourseInfoTotal from "../CourseInfoTotal/CourseInfoTotal";
import "./CourseInfoMain.css";
import CourseInfoLink from "../CourseInfoLink/CourseInfoLink";
import CourseInfoTopic from "../CourseInfoTopic/CourseInfoTopic";
import CourseInfoBox from "../CourseInfoBox/CourseInfoBox";
import CourseProgress from "../CourseProgress/CourseProgress";
import CourseIntroduction1 from "../CourseIntoduction1/CourseIntroduction1";
import CourseIntroduction2 from "../CourseIntroduction-2/CourseIntoduction2";
import CourseIntroductionBtns from "../CourseIntrodutionBtns/CourseIntroductionBtns";
import TopicAccordion from "../TopicAccordion/TopicAccordion";
import TeacherDetail from "../TeacherDetail/TeacherDetail";
import Accordion from "react-bootstrap/Accordion";
import Button from "../../Form/Button/Button";
export default function CourseInfoMain(props) {
  console.log(props);
  const {
    isComplete,
    updatedAt,
    status,
    isUserRegisteredToThisCourse,
    courseStudentsCount,
    price,
    comments,
    support,
    relatedCourses,
  } = props;
  return (
    <main className='main'>
      <div className='container'>
        <div className='row'>
          <div className='mainCourse-right col-8'>
            <div className='course'>
              <div className='course-boxes'>
                <div className='row'>
                  <CourseInfoBox
                    title='وضعیت دوره:'
                    subtitle={
                      isComplete === 0
                        ? "در حال ضبط"
                        : "دوره به اتمام رسیده است"
                    }
                    icon='fas fa-graduation-cap'
                  />
                  <CourseInfoBox
                    title='مدت زمان دوره:'
                    subtitle='19 ساعت'
                    icon='fas fa-clock'
                  />
                  <CourseInfoBox
                    title='آخرین بروزرسانی:'
                    subtitle={updatedAt}
                    icon='fas fa-calendar-alt'
                  />
                  <CourseInfoBox
                    title='روش پشتیبانی'
                    subtitle={support}
                    icon='fas fa-user-alt'
                  />
                  <CourseInfoBox
                    title='پیش نیاز:'
                    subtitle='HTML CSS'
                    icon='fas fa-info-circle'
                  />
                  <CourseInfoBox
                    title='نوع مشاهده:'
                    subtitle='ضبط شده / آنلاین'
                    icon='fas fa-play'
                  />
                </div>
              </div>
              <div className='courseProgressBar'>
                <CourseProgress />
              </div>
              <div className='introduction'>
                <CourseIntroduction1 />
                <CourseIntroduction2 />
                <CourseIntroductionBtns />
                <div className='introduction__topic'>
                  <Accordion defaultActiveKey='0'>
                    <TopicAccordion
                      eventKey={1}
                      title='معرفی دوره ها'
                      body='چرا به این دوره نیاز داریم'
                    />
                    <TopicAccordion
                      eventKey={2}
                      title='معرفی دوره ها'
                      body='چرا به این دوره نیاز داریم'
                    />
                    <TopicAccordion
                      eventKey={3}
                      title='معرفی دوره ها'
                      body='چرا به این دوره نیاز داریم'
                    />
                  </Accordion>
                </div>
                <TeacherDetail />
              </div>
            </div>
          </div>
          <div className='mainCourse-left col-4'>
            <div className='courses-info'>
              <div className='course-info'>
                <CourseInfoRegister title={isUserRegisteredToThisCourse} />
              </div>
              <div className='course-info'>
                <CourseInfoTotal
                  student={courseStudentsCount}
                  Comment={comments}
                  views={"123"}
                />
              </div>
              <div className='course-info'>
                <CourseInfoLink />
              </div>
              <div className='course-info'>
                <CourseInfoTopic />
              </div>
              <div className='course-info'>
                <div className='courseInfo__relatedCourses'>
                  <span className='course-info__courses-title'>
                    دوره های مرتبط
                  </span>
                  <ul className='course-info__courses-list'>
                    {relatedCourses.map((course) => (
                      <li
                        key={course._id}
                        className='course-info__courses-list-item'>
                        <Button href='#' className='course-info__courses-link'>
                          <img
                            src={`/images/courses/${course.cover}`}
                            alt='Course Cover'
                            className='course-info__courses-img'
                          />
                          <span className='course-info__courses-text'>
                            {course.name}
                          </span>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
