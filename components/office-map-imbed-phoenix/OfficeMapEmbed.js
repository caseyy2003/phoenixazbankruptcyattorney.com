/* components/OfficeMapEmbed.js */
/* eslint-disable */
import React from "react";
import NextImage from "next/image";
import Button from "/components/CustomButtons/Button.js";

export default function OfficeMapEmbed({
  containerClassName = "",
  previewSrc = "/img/yontz-law-phoenix-office-map-preview.webp",
  previewAlt = "Map preview showing the location of Yontz Law, PLLC at 4425 E Agave Rd Suite 106 in Phoenix, Arizona.",
  iframeSrc = "https://www.google.com/maps?q=4425%20E%20Agave%20Rd%20Suite%20106%2C%20Phoenix%2C%20AZ%2085044&output=embed",
  directionsHref = "https://www.google.com/maps/search/?api=1&query=4425%20E%20Agave%20Rd%20Suite%20106%2C%20Phoenix%2C%20AZ%2085044",
}) {
  const [showMap, setShowMap] = React.useState(false);

  return (
    <div className={containerClassName}>
      {!showMap ? (
        <div style={{ width: "100%", maxWidth: 750 }}>
          <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #e6e6e6" }}>
            <NextImage
              src={previewSrc}
              alt={previewAlt}
              width={750}
              height={420}
              sizes="(max-width: 768px) 95vw, 750px"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>

          <div style={{ textAlign: "center", marginTop: 12 }}>
            <Button color="primary" size="sm" onClick={() => setShowMap(true)}>
              View Interactive Map
            </Button>

            <Button
              color="info"
              size="sm"
              href={directionsHref}
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginLeft: 10 }}
            >
              Get Directions
            </Button>
          </div>

          <p style={{ marginTop: 10, color: "#555", textAlign: "center" }}>
            <small>Interactive map loads on click to keep the page fast.</small>
          </p>
        </div>
      ) : (
        <iframe
          title="Yontz Law, PLLC office location in Phoenix, Arizona"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ width: "100%", height: 380, border: 0, borderRadius: 8 }}
          src={iframeSrc}
        />
      )}
    </div>
  );
}
