import React from "react";
import Doublediv_Card from "../../../Doublediv_Card";
import Jobcard from "../../../Components/Jobcard.js";

function Works() {
  const projects = [
    {
      name: "OEE Monitoring",
      desc: "An OEE (Overall Equipment Effectiveness) Monitoring Dashboard developed with React.js and a Flask API provides real-time tracking and visualization of manufacturing performance metrics. The React.js frontend delivers a dynamic and interactive user interface, displaying key OEE indicators like Availability, Performance, and Quality. The Flask API acts as the backend, handling data requests, processing machine metrics, and integrating with databases or other systems. This setup allows users to monitor equipment efficiency, identify bottlenecks, and improve productivity through a seamless, responsive dashboard experience.",
    },
    {
      name: "Realtime Object Detection",
      desc: "Real-time object detection development using YOLOv8 with React and Socket.IO involves integrating a cutting-edge AI model for object detection into a dynamic web interface. YOLOv8 (You Only Look Once, version 8) is a fast, accurate, and efficient deep learning model for detecting objects in images or video streams. React handles the frontend UI, where the live video stream is displayed, and Socket.IO enables real-time, bidirectional communication between the client and server. The server processes the video frames with YOLOv8, detects objects in real time, and sends detection results back to the React frontend for display, creating an interactive and responsive user experience.",
    },
    {
      name: "Portfolio",
      desc: "A portfolio site developed using React, Node.js, and MongoDB allows for a dynamic, full-stack web application that showcases a developer's work and skills. React powers the responsive, interactive frontend, enabling users to browse projects, view details, and engage with the content seamlessly. Node.js handles backend functionality, including routing and API integration, while MongoDB stores project details, contact information, and user data securely",
    },
  ];
  return (
    <div class="pl-8 pr-8 lg:pl-36 lg:pr-24 pb-6 bg-[#0a192f] min-h-screen selection:text-gray-50">
      <header className="lg:mb-6">
        <span className="font-semibold text-xl text-green-400">03.</span>
        <span className="font-semibold text-xl link-underline link-underline-black">
          {" "}
          Some Things I’ve Built
          <span className="divider flex" />{" "}
        </span>
      </header>
      {/* <Doublediv_Card/> */}
      <div className="container lg:grid grid-cols-3">
        {projects.map((pr) => (
          <div className="py-2">
            <Jobcard name={pr.name} desc={pr.desc} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Works;
