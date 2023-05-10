import React from "react";
import CourseInfoRegister from "../CourseInfoRegister/CourseInfoRegister";
import CourseInfoTotal from "../CourseInfoTotal/CourseInfoTotal";
import "./CourseInfoMain.css";
import CourseInfoLink from "../CourseInfoLink/CourseInfoLink";
import CourseInfoTopic from "../CourseInfoTopic/CourseInfoTopic";
import CourseInfoRelatedCourses from "../CourseInfoRelatedCourses/CourseInfoRelatedCourses";
import CourseInfoBox from "../CourseInfoBox/CourseInfoBox";
import CourseProgress from "../CourseProgress/CourseProgress";
import CourseIntroduction1 from "../CourseIntoduction1/CourseIntroduction1";
import CourseIntroduction2 from "../CourseIntroduction-2/CourseIntoduction2";
import CourseIntroductionBtns from "../CourseIntrodutionBtns/CourseIntroductionBtns";
import TopicAccordion from "../TopicAccordion/TopicAccordion";
import TeacherDetail from "../TeacherDetail/TeacherDetail";
export default function CourseInfoMain() {
  return (
    <main class='main'>
      <div class='container'>
        <div class='row'>
          <div className='mainCourse-right col-8'>
            <div className='course'>
              <div class='course-boxes'>
                <div class='row'>
                  <CourseInfoBox
                    title='وضعیت دوره:'
                    subtitle='به اتمام رسیده'
                    icon='fas fa-graduation-cap'
                  />
                  <CourseInfoBox
                    title='مدت زمان دوره:'
                    subtitle='19 ساعت'
                    icon='fas fa-clock'
                  />
                  <CourseInfoBox
                    title='آخرین بروزرسانی:'
                    subtitle='1401/03/02'
                    icon='fas fa-calendar-alt'
                  />
                  <CourseInfoBox
                    title='روش پشتیبانی'
                    subtitle='آنلاین'
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
                <div class='introduction__topic'>
                  <TopicAccordion />
                  <TopicAccordion />
                  <TopicAccordion />
                </div>
                <TeacherDetail />
              </div>
            </div>
          </div>
          <div className='mainCourse-left col-4'>
            <div class='courses-info'>
              <div class='course-info'>
                <CourseInfoRegister />
              </div>
              <div class='course-info'>
                <CourseInfoTotal />
              </div>
              <div class='course-info'>
                <CourseInfoLink />
              </div>
              <div class='course-info'>
                <CourseInfoTopic />
              </div>
              <div class='course-info'>
                <CourseInfoRelatedCourses />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
