import React, { useEffect, useState } from "react";
import { useDonorContext } from "../../context/DonorContext";
import { useCampaignContext } from "../../context/CampaignContext";

const MainProgress = () => {
  const { sumOfAllDonorAmount } = useDonorContext();
    const { campaigns } = useCampaignContext();
  const total = campaigns.goal;
  const percentage = (sumOfAllDonorAmount / total) * 100;

  useEffect(() => {
    checkPrecentage(percentage);
  }, [sumOfAllDonorAmount, campaigns]);

  const maxFillLine1 = 86.693006;
  const maxFillLine2 = 88.866132;
  const maxFillLine3 = 85.63894;
  const maxFillErrow = 3.99947;

  const [line1, setLine1] = useState(0);
  const [line2, setLine2] = useState(0);
  const [line3, setLine3] = useState(0);
  const [errow, setErrow] = useState(0);

  const checkPrecentage = (percentage) => {
    if (percentage <= 33 && percentage >= 0) {
      setLine1((percentage / 33) * 100);
    } else if (percentage <= 66 && percentage >= 34) {
      setLine1(100);
      setLine2(((percentage - 33) / 33) * 100);
    } else if (percentage <= 99 && percentage >= 67) {
      setLine1(100);
      setLine2(100);
      setLine3(((percentage - 66) / 33) * 100);
    } else if (percentage === 100) {
      setLine1(100);
      setLine2(100);
      setLine3(100);
      setErrow(100);
    } else if (percentage > 100) {
      setLine1(100);
      setLine2(100);
      setLine3(100);
      setErrow(100);
    }
  };

  useEffect(() => {
    checkPrecentage(percentage);
  }, [percentage]);

  const fillLine1 = line1 * 0.86;
  const fillLine2 = line2 * 0.88;
  const fillLine3 = line3 * 0.85;
  const fillErrow = errow * 0.03;

  const colorBlue = "#223F84";
  const colorBrawn = "#C9A140";
  const whiteGrey = "#E5E5E5";

  return (
    <div className="">
      <h4
        style={{
          fontSize: "13px",
          fontWeight: "700",
          color: "#32444b",
          textTransform: "uppercase",
        }}
      >
        הסכום שהושג
      </h4>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          width="280"
          zoomAndPan="magnify"
          viewBox="0 0 210 89.999999"
          height="120"
          preserveAspectRatio="xMidYMid meet"
          version="1.0"
        >
          <path
            stroke-linecap="butt"
            transform="matrix(0.613411, 0.437224, -0.435317, 0.610736, 28.138421, 3.587267)"
            fill="none"
            stroke-linejoin="miter"
            d="M 3.99947 3.997493 L 85.63894 3.998471 "
            stroke={whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
          <path
            stroke-linecap="round"
            transform="matrix(0.613411, 0.437224, -0.435317, 0.610736, 28.138421, 3.587267)"
            fill="none"
            stroke-linejoin="round"
            d="M 20.001147 -8.001704 L 3.99947 3.997493 L 20.001327 16.002237 "
            stroke={whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
          <path
            stroke-linecap="butt"
            transform="matrix(0.744008, 0.103603, -0.103439, 0.742833, 77.425603, 39.430799)"
            fill="none"
            stroke-linejoin="miter"
            d="M -0.000128216 4.000306 L 88.866132 4.000613 "
            stroke={whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
          <path
            stroke-linecap="round"
            transform="matrix(0.655341, 0.370015, -0.368745, 0.65309, 141.770516, 47.790995)"
            fill="none"
            stroke-linejoin="miter"
            d="M 4.00084 3.998596 L 86.693006 3.999024 "
            stroke={whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />

          <path
            stroke-linecap="butt"
            transform="matrix(0.613411, 0.437224, -0.435317, 0.610736, 28.138421, 3.587267)"
            fill="none"
            stroke-linejoin="miter"
            d={`M ${
              maxFillLine3 - fillLine3 + 2
            } 3.997493 L ${maxFillLine3} 3.998471 `}
            stroke={line3 > 0 ? colorBlue : whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
          <path
            stroke-linecap="round"
            transform="matrix(0.613411, 0.437224, -0.435317, 0.610736, 28.138421, 3.587267)"
            fill="none"
            stroke-linejoin="round"
            d="M 20.001147 -8.001704 L 3.99947 3.997493 L 20.001327 16.002237 "
            stroke={errow === 100 ? colorBlue : whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
          <path
            stroke-linecap="butt"
            transform="matrix(0.744008, 0.103603, -0.103439, 0.742833, 77.425603, 39.430799)"
            fill="none"
            stroke-linejoin="miter"
            d={`M ${
              maxFillLine2 - fillLine2
            } 4.000306 L ${maxFillLine2} 4.000613 `}
            stroke={line2 > 0 ? colorBlue : whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
          <path
            stroke-linecap="round"
            transform="matrix(0.655341, 0.370015, -0.368745, 0.65309, 141.770516, 47.790995)"
            fill="none"
            stroke-linejoin="miter"
            d={`M ${
              maxFillLine1 - fillLine1 + 2
            } 3.998596 L ${maxFillLine1} 3.999024 `}
            stroke={line1 > 0 ? colorBlue : whiteGrey}
            stroke-width="8"
            stroke-opacity="1"
            stroke-miterlimit="4"
          />
        </svg>
      </div>
      <p
        style={{
          fontSize: "45px",
          textTransform: "uppercase",
          fontWeight: "200",
          marginBottom: "20px",
          color: "#213b7f",
        }}
      >
        ₪{Number(sumOfAllDonorAmount).toLocaleString() ?? 0}
      </p>
      <p
        className="rlt text-center"
        style={{
          display: "block",
          marginBottom: "10px",
          fontSize: "13px",
          fontWeight: "700",
          color: "#32444b",
          textTransform: "uppercase",
        }}
      >
        {Math.round(percentage ?? 0)}% מהיעד ₪
        {Number(campaigns.goal ?? 0).toLocaleString()}
      </p>
    </div>
  );
};

export default MainProgress;
