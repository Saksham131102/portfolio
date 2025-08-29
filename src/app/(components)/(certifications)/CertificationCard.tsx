import React from "react";
import { ExternalLink, Calendar, Award } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CertificationCardProps {
  badgeImage: string;
  name: string;
  link: string;
  achievedDate: string;
  issuer?: string;
}

const CertificationCard = ({
  badgeImage,
  name,
  link,
  achievedDate,
  issuer,
}: CertificationCardProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="w-20">
        <img src={badgeImage} alt="badgeImage" />
      </div>
    </div>
  );
};

export default CertificationCard;
