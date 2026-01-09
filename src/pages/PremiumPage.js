// src/pages/PremiumPage.js
import React from "react";
import "./PremiumPage.css";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "₵6.99 / mo",
    perks: ["Verified badge", "1 Boost / week", "Priority support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: "₵14.99 / mo",
    perks: ["All Starter perks", "Unlimited boosts", "Profile insights"],
    featured: true,
  },
  {
    id: "elite",
    name: "Elite",
    price: "₵29.99 / mo",
    perks: ["All Pro perks", "Ad-free", "Top Spotlight", "Exclusive filters"],
  },
];

export default function PremiumPage() {
  function onChoose(planId) {
    // placeholder action — integrate payment flow here (Stripe/Paystack/other)
    alert(`Upgrade flow for "${planId}" will be integrated soon.`);
  }

  return (
    <div className="premium-page">
      <div className="premium-hero">
        <div className="hero-left">
          <h1>Pulse Premium</h1>
          <p className="hero-sub">Power features across Dating, Social & Community hubs</p>
          <ul className="hero-features">
            <li>Visibility Boost — Get seen more</li>
            <li>Top Spotlight — Be featured on hub pages</li>
            <li>Exclusive filters & ad-free experience</li>
          </ul>
        </div>

        <div className="hero-right">
          <div className="hero-card">
            <div className="price-tag">Best value</div>
            <h3>Pro</h3>
            <p className="price">₵14.99 / month</p>
            <button className="cta" onClick={() => onChoose("pro")}>Get Pro</button>
            <small className="muted">Cancel anytime • Secure checkout</small>
          </div>
        </div>
      </div>

      <section className="plans">
        {plans.map((p) => (
          <article key={p.id} className={`plan ${p.featured ? "featured" : ""}`}>
            {p.featured && <div className="ribbon">Popular</div>}
            <h4 className="plan-name">{p.name}</h4>
            <div className="plan-price">{p.price}</div>
            <ul className="plan-perks">
              {p.perks.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
            <button className="choose" onClick={() => onChoose(p.id)}>
              Choose {p.name}
            </button>
          </article>
        ))}
      </section>

      <section className="premium-info">
        <h3>Why Pulse Premium?</h3>
        <div className="info-grid">
          <div className="info">
            <h5>Reach</h5>
            <p>Appear higher in feeds, get more profile visits and post reach across hubs.</p>
          </div>

          <div className="info">
            <h5>Insights</h5>
            <p>See who viewed & liked your profile, track performance with analytics.</p>
          </div>

          <div className="info">
            <h5>Exclusive Hub Access</h5>
            <p>Join premium-only groups, events, and matchmaking communities.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
