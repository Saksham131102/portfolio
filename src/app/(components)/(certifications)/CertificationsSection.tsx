import React from "react";
import CertificationCard from "./CertificationCard";

const CertificationsSection = () => {
  const certifications = [
    {
      badgeImage: "/images/CertificationsImage/OCI25AICFAV1.png",
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      link: "https://www.credly.com/badges/your-badge-id",
      achievedDate: "2024-06-15",
    },
    {
      badgeImage: "/images/CertificationsImage/OCI25GAIOCP.png",
      name: "React Developer Certification",
      issuer: "Meta",
      link: "https://coursera.org/verify/your-certificate",
      achievedDate: "2024-03-22",
    },
    // Add more certifications as needed
  ];

  return (
    <div className="text-sm pt-8">
      <div className="text-[#B3B3B3] dark:text-[#ededed] font-ibm-plex-mono">
        Certifications
      </div>
      <div className="mt-4">
        {certifications.map((cert, index) => (
          <CertificationCard
            key={index}
            badgeImage={cert.badgeImage}
            name={cert.name}
            issuer={cert.issuer}
            link={cert.link}
            achievedDate={cert.achievedDate}
          />
        ))}
      </div>
    </div>
  );
};

export default CertificationsSection;
