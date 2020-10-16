import React from "react";
import CountUp from "react-countup";
import Loader from "react-loader-spinner";

export default function Card({
  data: {
    deaths,
    in_isolation,
    quarantined,
    recovered,
    tested_negative,
    tested_positive,
    tested_total,
    updated_at,
  },
}) {
  if (!deaths) {
    return (
      <div className="loader">
        <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
      </div>
    );
  } else {
    return (
      <div className="card__body">
        <div className="card__main">
          <h3>Quarantined</h3>
          <h4>
            <CountUp start={0} end={quarantined} duration={2} separator="," />
          </h4>
          <p>{new Date(updated_at).toDateString()}</p>
        </div>

        <div className="card__main">
          <h3>Isolated</h3>
          <h4>
            <CountUp start={0} end={in_isolation} duration={2} separator="," />
          </h4>
          <p>{new Date(updated_at).toDateString()}</p>
        </div>
        <div className="card__main">
          <h3>Recovered</h3>
          <h4>
            <CountUp start={0} end={recovered} duration={2} separator="," />
          </h4>
          <p>{new Date(updated_at).toDateString()}</p>
        </div>

        <div className="card__main">
          <h3>total Tests </h3>
          <h4>
            <CountUp start={0} end={tested_total} duration={2} separator="," />
          </h4>
          <p>{new Date(updated_at).toDateString()}</p>
        </div>
        <div className="card__main">
          <h3>positive cases</h3>
          <h4>
            <CountUp
              start={0}
              end={tested_positive}
              duration={2}
              separator=","
            />
          </h4>
          <p>{new Date(updated_at).toDateString()}</p>
        </div>
        <div className="card__main">
          <h3>negative cases</h3>
          <h4>
            <CountUp
              start={0}
              end={tested_negative}
              duration={2}
              separator=","
            />
          </h4>
          <p>{new Date(updated_at).toDateString()}</p>
        </div>
        <div className="card__main">
          <h3>deaths</h3>
          <h4>
            <CountUp start={0} end={deaths} duration={2} separator="," />
          </h4>
          <p>{new Date(updated_at).toDateString()}</p>
        </div>
      </div>
    );
  }
}
