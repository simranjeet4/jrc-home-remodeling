/**
 * HomeRemodelingProcess
 * Section 5: "WORKING PROCESS"
 * - 4-step sequential workflow on #FAF3E9 background
 * - Icons with orange numbered circle tags (1, 2, 3, 4)
 * - Exact icons: Phone, Calendar, Crossed Hammer/Wrench, Checkered Finish Flag
 */
export default function HomeRemodelingProcess() {
  const steps = [
    {
      num: '1',
      title: 'Get a Free Quote',
      desc: 'Contact us or use our online form to request a no-obligation estimate.',
      icon: (
        <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
        </svg>
      ),
    },
    {
      num: '2',
      title: 'Schedule a Consultation',
      desc: 'We visit your home to discuss your goals, budget, and timeline in person.',
      icon: (
        <svg viewBox="0 0 448 512" width="26" height="26" fill="currentColor">
          <path d="M148 288h-40c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12zm108-12v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 96v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm-96 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm192 0v-40c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12zm96-260v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h48V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h128V12c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v52h48c26.5 0 48 21.5 48 48zm-48 346V160H48v298c0 3.3 2.7 6 6 6h340c3.3 0 6-2.7 6-6z" />
        </svg>
      ),
    },
    {
      num: '3',
      title: 'Remodeling Begins',
      desc: 'Our team starts the project, keeping you updated and the site clean throughout.',
      icon: (
        <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
          <path d="M501.1 395.7L384 278.6c-23.1-23.1-57.6-27.6-85.4-13.9L192 158.1V96L64 0 0 64l96 128h62.1l106.6 106.6c-13.6 27.8-9.2 62.3 13.9 85.4l117.1 117.1c14.6 14.6 38.2 14.6 52.7 0l52.7-52.7c14.5-14.6 14.5-38.1 0-52.7z" />
        </svg>
      ),
    },
    {
      num: '4',
      title: 'Final Walkthrough',
      desc: 'We review the finished work together to make sure everything meets your expectations.',
      icon: (
        <svg viewBox="0 0 512 512" width="26" height="26" fill="currentColor">
          <path d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.043 12.013V40c0-13.255-10.745-24-24-24s-24 10.745-24 24v432c0 13.255 10.745 24 24 24s24-10.745 24-24v-166.45c20.734 7.629 43.088 12.013 68.043 12.013 67.373 0 111.63-34.783 165.217-34.783 53.587 0 97.844 34.783 165.217 34.783 13.255 0 24-10.745 24-24V122.783c0-13.255-10.745-24-24-24-67.373 0-111.63-34.783-165.217-34.783zm117.217 172.934c-47.671-5.183-88.665-27.15-141.217-27.15-53.587 0-97.844 34.783-165.217 34.783-17.65 0-33.829-2.316-48.043-6.502V124.969c14.214 4.186 30.393 6.502 48.043 6.502 67.373 0 111.63-34.783 165.217-34.783 52.552 0 93.546 21.967 141.217 27.15v147.879z" />
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
