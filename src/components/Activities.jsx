import React from "react";
import "../styles/global.css";

const Activities = () => {
  const activities = [
    { id: 1, title: "River Rafting", description: "Thrilling rafting in the Ganga rapids of Rishikesh.", media: "/rafting.jpg", type: "image" },
    { id: 2, title: "Bungee Jumping", description: "Leap from India’s highest bungee platform.", media: "/bungee.jpg", type: "image" },
    { id: 3, title: "Camping", description: "Stay in riverside camps under the stars.", media: "/camping.jpg", type: "image" },
    { id: 4, title: "Giant Swing", description: "Swing high above the valley at top speed!", media: "/giant-swing.jpg", type: "image" },
    { id: 5, title: "Reverse Bungy", description: "Catapulted sky-high in seconds, full adrenaline!", media: "/reversebungy.jpg", type: "image" },
    { id: 6, title: "Scad Jump", description: "Pure freefall, no ropes – just gravity thrill!.", media: "/scadjump.jpg", type: "image" },
    { id: 7, title: "Paragliding", description: "Soar high above the mountains with paragliding.", media: "/paragliding.jpg", type: "image" },
    { id: 8, title: "Zip Lining", description: "Glide across rivers and valleys on a zip line.", media: "/zipline.jpg", type: "image" },
    { id: 9, title: "Combo 1", description: "Bungee Jump + Reverse Bungee + Giant Swing.", media: "/combo4.jpg", type: "image" },
    { id: 10, title: "Combo 2", description: "Bungee Jump + Scad Jump", media: "/combo5.jpg", type: "image" },
  ];

  // Agar last row incomplete hai to filler videos daal do
  const fillers = [
    { id: "v1", title: "Adventure Highlights", description: "Experience the thrill!", media: "/filler2.mp4", type: "video" },
    { id: "v2", title: "Xtremethrillzone Moments", description: "Unforgettable memories.", media: "/filler1.mp4", type: "video" },
  ];

  // Images ke baad filler videos add
  const fullGrid = [...activities, ...fillers];

  return (
    <section id="activities" className="activities">
      <h2 className="activities-title">Our Adventure Activities</h2>
      <div className="activities-grid">
        {fullGrid.map((item) => (
          <div key={item.id} className="activity-card">
            {item.type === "video" ? (
              <video
                src={item.media}
                className="activity-media"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img src={item.media} alt={item.title} className="activity-media" />
            )}
            <div className="activity-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
