const { createApp } = Vue

createApp({
  data() {
    return {
      skills: [
        "HTML & CSS",
        "JavaScript",
        "React",
        "Python",
        "UI Design",
        "Problem Solving",
        "Git & GitHub",
        "Responsive Design",
        "Figma",
        "Node.js"
      ],
      projects: [
        {
          title: "Personal Blog",
          description: "A responsive blog website to share thoughts on technology and life, built with React and styled with care."
        },
        {
          title: "Shopping App UI",
          description: "A clean e-commerce interface with product listings, cart functionality and smooth user experience."
        },
        {
          title: "Data Dashboard",
          description: "An interactive dashboard visualizing student performance data with charts and dynamic filters."
        }
      ],
      aboutInfo: [
        { label: "Name", value: "Muntaha Tabassum" },
        { label: "University", value: "Metropolitan University" },
        { label: "Degree", value: "BSc in CSE" },
        { label: "Year", value: "4th Year" },
        { label: "Email", value: "tabassum.muntaha23@gmail.com" }
      ]
    }
  }
}).mount('#app')