/**
 * HomeRemodelingProcess
 * Section: "WORKING PROCESS" / "Our Step-by-Step Deck Building Process"
 * - Exact match with reference design
 * - Tag pill: "WORKING PROCESS"
 * - Heading: "Our Step-by-Step Deck Building Process"
 * - 4 Horizontal Process Steps:
 *   1. Get a Free Quote (Phone icon + orange circle #1)
 *   2. Schedule a Consultation (Calendar Check icon + orange circle #2)
 *   3. Remodeling Begins (Crossed Tools icon + orange circle #3)
 *   4. Final Walkthrough (Checkered Finish Flag icon + orange circle #4)
 */
export default function HomeRemodelingProcess() {
  const steps = [
    {
      num: '1',
      title: 'Get a Free Quote',
      desc: 'Contact us or use our online form to request a no-obligation estimate.',
      icon: (
        <svg
          aria-hidden="true"
          className="e-font-icon-svg e-fas-phone-alt"
          viewBox="0 0 512 512"
          width="34"
          height="34"
          fill="currentColor"
        >
          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
        </svg>
      ),
    },
    {
      num: '2',
      title: 'Schedule a Consultation',
      desc: 'We visit your home to discuss your goals, budget, and timeline in person.',
      icon: (
        <svg
          aria-hidden="true"
          className="e-font-icon-svg e-fas-calendar-check"
          viewBox="0 0 448 512"
          width="34"
          height="34"
          fill="currentColor"
        >
          <path d="M436 160H12c-6.627 0-12-5.373-12-12v-36c0-26.51 21.49-48 48-48h48V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h128V12c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v52h48c26.51 0 48 21.49 48 48v36c0 6.627-5.373 12-12 12zM12 192h424c6.627 0 12 5.373 12 12v260c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V204c0-6.627 5.373-12 12-12zm333.296 95.947l-28.169-28.398c-4.667-4.705-12.265-4.736-16.97-.068L194.12 364.665l-45.98-46.352c-4.667-4.705-12.266-4.736-16.971-.068l-28.397 28.17c-4.705 4.667-4.736 12.265-.068 16.97l82.601 83.269c4.667 4.705 12.265 4.736 16.97.068l142.953-141.805c4.705-4.667 4.736-12.265.068-16.97z" />
        </svg>
      ),
    },
    {
      num: '3',
      title: 'Remodeling Begins',
      desc: 'Our team starts the project, keeping you updated and the site clean throughout.',
      icon: (
        <svg
          aria-hidden="true"
          className="e-font-icon-svg e-fas-tools"
          viewBox="0 0 512 512"
          width="34"
          height="34"
          fill="currentColor"
        >
          <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.2 0-52.7zM331.7 225c28.3 0 54.9 11 74.9 31l19.4 19.4c15.8-6.9 30.8-16.5 43.8-29.5 37.1-37.1 49.7-89.3 37.9-136.7-2.2-9-13.5-12.1-20.1-5.5l-74.4 74.4-67.9-11.3L334 98.9l74.4-74.4c6.6-6.6 3.4-17.9-5.7-20.2-47.4-11.7-99.6.9-136.6 37.9-28.5 28.5-41.9 66.1-41.2 103.6l82.1 82.1c8.1-1.9 16.5-2.9 24.7-2.9zm-103.9 82l-56.7-56.7L18.7 402.8c-25 25-25 65.5 0 90.5s65.5 25 90.5 0l123.6-123.6c-7.6-19.9-9.9-41.6-5-62.7zM64 472c-13.2 0-24-10.8-24-24 0-13.3 10.7-24 24-24s24 10.7 24 24c0 13.2-10.7 24-24 24z" />
        </svg>
      ),
    },
    {
      num: '4',
      title: 'Final Walkthrough',
      desc: 'We review the finished work together to make sure everything meets your expectations.',
      icon: (
        <svg
          aria-hidden="true"
          className="e-font-icon-svg e-fas-flag-checkered"
          viewBox="0 0 512 512"
          width="34"
          height="34"
          fill="currentColor"
        >
          <path d="M243.2 189.9V258c26.1 5.9 49.3 15.6 73.6 22.3v-68.2c-26-5.8-49.4-15.5-73.6-22.2zm223.3-123c-34.3 15.9-76.5 31.9-117 31.9C296 98.8 251.7 64 184.3 64c-25 0-47.3 4.4-68 12 2.8-7.3 4.1-15.2 3.6-23.6C118.1 24 94.8 1.2 66.3 0 34.3-1.3 8 24.3 8 56c0 19 9.5 35.8 24 45.9V488c0 13.3 10.7 24 24 24h16c13.3 0 24-10.7 24-24v-94.4c28.3-12.1 63.6-22.1 114.4-22.1 53.6 0 97.8 34.8 165.2 34.8 48.2 0 86.7-16.3 122.5-40.9 8.7-6 13.8-15.8 13.8-26.4V95.9c.1-23.3-24.2-38.8-45.4-29zM169.6 325.5c-25.8 2.7-50 8.2-73.6 16.6v-70.5c26.2-9.3 47.5-15 73.6-17.4zM464 191c-23.6 9.8-46.3 19.5-73.6 23.9V286c24.8-3.4 51.4-11.8 73.6-26v70.5c-25.1 16.1-48.5 24.7-73.6 27.1V286c-27 3.7-47.9 1.5-73.6-5.6v67.4c-23.9-7.4-47.3-16.7-73.6-21.3V258c-19.7-4.4-40.8-6.8-73.6-3.8v-70c-22.4 3.1-44.6 10.2-73.6 20.9v-70.5c33.2-12.2 50.1-19.8 73.6-22v71.6c27-3.7 48.4-1.3 73.6 5.7v-67.4c23.7 7.4 47.2 16.7 73.6 21.3v68.4c23.7 5.3 47.6 6.9 73.6 2.7V143c27-4.8 52.3-13.6 73.6-22.5z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="hr-process-section">
      <div className="hr-container">
        {/* Section Header */}
        <div className="hr-section-header text-center">
          <div className="hr-tag-pill">
            <span>WORKING PROCESS</span>
          </div>
          <h2 className="hr-section-title">
            Our Step-by-Step Deck Building Process
          </h2>
        </div>

        {/* 4 Steps Horizontal Row */}
        <div className="hr-process-steps-row">
          {steps.map((step) => (
            <div key={step.num} className="hr-process-step-item">
              <div className="hr-step-icon-container">
                <div className="hr-step-icon-box">{step.icon}</div>
                <span className="hr-step-number-tag">{step.num}</span>
              </div>
              <h3 className="hr-step-title">{step.title}</h3>
              <p className="hr-step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
