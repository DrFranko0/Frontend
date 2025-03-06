"use client";
import React, { useEffect, useState } from 'react'

export default function AboutSection(){
    const awards = [
        {
          id: 1,
          image: "/Logo1.png",
          alt: "Los Angeles Invitational Wine & Spirits Challenge"
        },
        {
          id: 2,
          image: "/Logo1.png",
          alt: "SIP Magazine 2022 Platinum Medal Best of the NW"
        },
        {
          id: 3,
          image: "/Logo1.png",
          alt: "Impact Hot Prospects Awards 2022"
        },
        {
          id: 4,
          image: "/Logo1.png",
          alt: "Gold 2018 San Diego Spirits Festival"
        },
        {
          id: 5,
          image: "/Logo1.png",
          alt: "Best of the Northwest 2015 1st Place"
        },
        {
          id: 6,
          image: "/Logo1.png",
          alt: "San Francisco World Spirits Competition 2014 Gold Medal"
        }
      ];
      return (
        <section className="achievements">
          <h2 className="title">Recognition</h2>
          <div className="awards-container">
            {awards.map((award) => (
              <div key={award.id} className="award-item">
                <img src={award.image} alt={award.alt} />
              </div>
            ))}
          </div>
        </section>
      )
}