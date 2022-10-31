import React from "react";
import "./Card.css";

export default function Card({ company }) {
  return (
    <div className="card">
      <img src={company.bg_url} alt={company.name} />
      <div className="drawer">
        <img src={company.icon_url} alt={`${company.name}'s icon`} />
        <h3 className="name">{company.name}</h3>
        <p className="description">{company.description}</p>
        <div className="unhovered">
          <h5 className="location">{company.location}</h5>
          <div className="tags">
            {company.tags.map((tag) => (
              <div
                className="tag"
                style={{
                  backgroundColor: tag === "women founders" ? "#c2f9f4" : null,
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="hovered">
          {company.details.map((detail) => {
            return (
              <>
                {console.log(detail.from)}
                <hr />
                <div className="detail">
                  <strong>
                    {detail.from === "days left" && "🔥 "}
                    {`${
                      detail.from !== "investors" && detail.from !== "days left"
                        ? "$"
                        : ""
                    }${detail.amount.toLocaleString("en-US")}`}
                  </strong>
                  {` ${detail.from}`}
                </div>
              </>
            );
          })}
        </div>
      </div>
      {company.details.map((detail) => {
        if (detail.from === "days left") {
          return (
            <div className="upper-left">
              <img
                src="https://cdn-icons-png.flaticon.com/512/1296/1296041.png"
                alt="fire icon"
                className="icon"
              />
              <p>{detail.amount} days left to invest</p>
            </div>
          );
        } else if (detail.hasOwnProperty("special")) {
          return (
            <div className="upper-left special">
              <img
                src="https://cdn-icons-png.flaticon.com/512/740/740845.png"
                alt="lightning icon"
                className="icon lightning"
              />
              <p>special</p>
            </div>
          )
        } else {
          return null;
        }
      })}
    </div>
  );
}
