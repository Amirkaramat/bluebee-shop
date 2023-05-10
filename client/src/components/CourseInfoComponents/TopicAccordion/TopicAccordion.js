import React from 'react'
import './TopicAccordion.css'
export default function TopicAccordion() {
  return (
    <div class='accordion' id='accordionExample'>
      <div class='accordion-item'>
        <h2 class='accordion-header' id='headingOne'>
          <button
            class='accordion-button'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapseOne'
            aria-expanded='true'
            aria-controls='collapseOne'>
            معرفی دوره
          </button>
        </h2>
        <div
          id='collapseOne'
          class='accordion-collapse collapse show'
          aria-labelledby='headingOne'
          data-bs-parent='#accordionExample'>
          <div class='accordion-body introduction__accordion-body'>
            <div class='introduction__accordion-right'>
              <span class='introduction__accordion-count'>1</span>
              <i class='fab fa-youtube introduction__accordion-icon'></i>
              <a href='#' class='introduction__accordion-link'>
                معرفی دوره + چرا یادگیری کتابخانه ها ضروری است؟
              </a>
            </div>
            <div class='introduction__accordion-left'>
              <span class='introduction__accordion-time'>18:34</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
