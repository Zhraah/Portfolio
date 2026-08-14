import React from "react";

import avatar from "../assets/profile/zhra-avatar.png";
import { addCalendarDays, buildCalendarMonth, calendarWeekdays, getFirstAvailableDate, toDateKey } from "../utils/calendar.js";

function ContactSchedulePage() {
  const [selectedDate, setSelectedDate] = React.useState(getFirstAvailableDate);
  const [viewMonth, setViewMonth] = React.useState(
    () => new Date(getFirstAvailableDate().getFullYear(), getFirstAvailableDate().getMonth(), 1),
  );

  const today = new Date();
  const minimumDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const maximumDate = addCalendarDays(minimumDate, 90);
  const calendarDays = buildCalendarMonth(viewMonth);
  const monthLabel = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" }).format(viewMonth);
  const selectedDateLabel = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(selectedDate);
  const firstAllowedMonth = new Date(minimumDate.getFullYear(), minimumDate.getMonth(), 1);
  const lastAllowedMonth = new Date(maximumDate.getFullYear(), maximumDate.getMonth(), 1);
  const canGoPrevious = viewMonth > firstAllowedMonth;
  const canGoNext = viewMonth < lastAllowedMonth;
  const meetingRecipient = "zhraa.ahmadpour@gmail.com";
  const selectedDateKey = toDateKey(selectedDate);
  const meetingSubjectText = `Meeting request - ${selectedDateLabel}`;
  const meetingBodyText = [
    "Hi Zhra,",
    "",
    "I'd like to request a 30-minute meeting on:",
    `${selectedDateLabel} (${selectedDateKey})`,
    "",
    "I'm flexible about the time and happy to coordinate it with you by email.",
    "",
    "Thank you!",
  ].join("\n");
  const gmailComposeHref = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(meetingRecipient)}&su=${encodeURIComponent(meetingSubjectText)}&body=${encodeURIComponent(meetingBodyText)}`;

  function changeMonth(amount) {
    setViewMonth((current) => new Date(current.getFullYear(), current.getMonth() + amount, 1));
  }

  return (
    <section className="contact-page-stage booking-page" aria-label="Book a meeting">
      <header className="booking-page-header">
        <div>
          <p className="section-label">[ Contact ]</p>
          <h1>Let’s find a time<br />that works.</h1>
        </div>
        <div className="booking-intro">
          <p>Pick a day for a focused 30-minute conversation about your product, idea, or design challenge. We’ll confirm the best time by email.</p>
          <span><i /> Usually replies within 24 hours</span>
        </div>
      </header>

      <div className="booking-layout">
        <section className="booking-calendar" aria-label="Choose a meeting date">
          <div className="booking-calendar-header">
            <div>
              <small>Choose a day</small>
              <strong>{monthLabel}</strong>
            </div>
            <div className="month-controls">
              <button type="button" onClick={() => changeMonth(-1)} disabled={!canGoPrevious} aria-label="Previous month">←</button>
              <button type="button" onClick={() => changeMonth(1)} disabled={!canGoNext} aria-label="Next month">→</button>
            </div>
          </div>

          <div className="calendar-weekdays" aria-hidden="true">
            {calendarWeekdays.map((day) => <span key={day}>{day}</span>)}
          </div>

          <div className="calendar-date-grid">
            {calendarDays.map((date) => {
              const dateKey = toDateKey(date);
              const isOutsideMonth = date.getMonth() !== viewMonth.getMonth();
              const isWeekend = [0, 6].includes(date.getDay());
              const isDisabled = date < minimumDate || date > maximumDate || isWeekend || isOutsideMonth;
              const isSelected = dateKey === toDateKey(selectedDate);
              const isToday = dateKey === toDateKey(minimumDate);
              return (
                <button
                  type="button"
                  className={`${isSelected ? "is-selected" : ""} ${isOutsideMonth ? "is-outside" : ""} ${isToday ? "is-today" : ""}`}
                  onClick={() => setSelectedDate(date)}
                  disabled={isDisabled}
                  aria-label={new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(date)}
                  aria-pressed={isSelected}
                  key={dateKey}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>

          <footer className="calendar-legend">
            <span><i /> Available</span>
            <span>Available Monday–Friday</span>
          </footer>
        </section>

        <aside className="booking-details" aria-label="Meeting details">
          <div className="booking-host">
            <span className="booking-avatar"><img src={avatar} alt="Zhra Ahmadpour" /><i /></span>
            <div><small>Meeting with</small><strong>Zhra Ahmadpour</strong></div>
            <span className="duration-pill">30 min</span>
          </div>

          <div className="booking-title">
            <small>Product design chat</small>
            <h2>Your selected day</h2>
          </div>

          <div className="booking-format">
            <span className="booking-format-icon" aria-hidden="true">◷</span>
            <div>
              <strong>30-minute conversation</strong>
              <p>We’ll coordinate the best time together by email.</p>
            </div>
          </div>

          <div className="booking-summary">
            <span>Selected day</span>
            <strong>{selectedDateLabel}</strong>
            <em>Time coordinated by email</em>
          </div>

          <a
            className="meeting-submit refined-meeting-submit"
            href={gmailComposeHref}
            target="_blank"
            rel="noreferrer"
            aria-label={`Request a meeting on ${selectedDateLabel} by email`}
          >
            Request this day <span>↗</span>
          </a>
          <p className="booking-footnote">Opens Gmail with your selected date ready to send.</p>
        </aside>
      </div>

      <div className="contact-direct-line">
        <span>Prefer writing first?</span>
        <a href="mailto:zhraa.ahmadpour@gmail.com">zhraa.ahmadpour@gmail.com ↗</a>
      </div>
    </section>
  );
}

export default ContactSchedulePage;
