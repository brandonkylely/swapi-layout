import axios from "axios";
import { useAtom } from "jotai";
import { useState, useEffect } from "react";
import { swapiURL } from "../api";

export default function Card(props) {
  return (
    <>
    <div key={props.key}>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <div
            className="card w-96 bg-base-100 shadow-xl"
            key={props.key}
            >
            <figure>
              <img src={props.src} alt={props.name} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {props.name}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{props.manufacturer}</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">
                  {props.cost_in_credits}
                </div>
                <div className="badge badge-outline"></div>
              </div>
            </div>
          </div>
      </button>

      <dialog id="my_modal_1" className="modal">
        <div
          className="modal-box card w-96 bg-base-100 shadow-xl"
          >
          <figure>
            <img src={props.src} alt={props.name} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {props.name}
              <div className="badge badge-secondary">NEW</div>
            </h2>
            <p>{props.manufacturer}</p>
            <div className="card-actions justify-end">
              <div className="badge badge-outline">{props.cost_in_credits}</div>
              <div className="badge badge-outline"></div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
          </div>
    </>
  );
}
