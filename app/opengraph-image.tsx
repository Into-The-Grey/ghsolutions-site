import { ImageResponse } from "next/og";

export const alt =
  "GreyHat Solutions — Security-minded systems, automation, and digital infrastructure";

export const size = { width: 1200, height: 630 };

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Top accent bar */}
        <div
          style={{ width: "100%", height: "4px", background: "#22c55e" }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "80px",
            fontFamily: "ui-monospace, Menlo, monospace",
          }}
        >
          {/* Domain badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "40px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                background: "#22c55e",
                borderRadius: "6px",
                fontSize: "18px",
                fontWeight: "700",
                color: "#0a0a0a",
                marginRight: "16px",
              }}
            >
              GH
            </div>
            <span
              style={{
                color: "#6b7280",
                fontSize: "18px",
                letterSpacing: "0.1em",
              }}
            >
              greyhat-solutions.com
            </span>
          </div>

          {/* Heading */}
          <div
            style={{
              fontSize: "80px",
              fontWeight: "700",
              color: "#f5f5f5",
              letterSpacing: "-0.025em",
              lineHeight: 1,
              marginBottom: "28px",
            }}
          >
            GreyHat Solutions
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "28px",
              color: "#9ca3af",
              lineHeight: "1.5",
            }}
          >
            Security-minded systems, automation, and digital infrastructure.
          </div>

          {/* Tag pills */}
          <div
            style={{ display: "flex", marginTop: "48px", gap: "12px" }}
          >
            {["Cybersecurity", "Automation", "Homelab", "OSINT"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    padding: "8px 20px",
                    background: "#171717",
                    border: "1px solid #262626",
                    borderRadius: "4px",
                    color: "#6b7280",
                    fontSize: "16px",
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    ),
    size
  );
}
