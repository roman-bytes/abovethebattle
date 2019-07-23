import React, { Component } from 'react';

export default class Diamond extends Component {
  render() {
    return (
      <svg
        width="85"
        height="10"
        viewBox="0 0 85 10"
        xmlns="http://www.w3.org/2000/svg"
        className="heading-line"
      >
        <g fill="none" fillRule="evenodd" strokeLinecap="square">
          <g transform="translate(-175 -341)" stroke="#FB3053">
            <g transform="translate(175 341)">
              <path d="M0.346153846,8.69230769 L8.6826424,1.28209564" />
              <path d="M17.2652738,8.67362413 L8.77950127,0.813452374 L17.2652738,8.67362413 Z" />
              <path d="M17.3461538,8.69230769 L25.6826424,1.28209564" />
              <path d="M34.1781951,8.67362413 L25.6924226,0.813452374 L34.1781951,8.67362413 Z" />
              <path d="M34.3461538,8.69230769 L42.6826424,1.28209564" />
              <path d="M51.0911164,8.67362413 L42.6053439,0.813452374 L51.0911164,8.67362413 Z" />
              <path d="M51.3461538,8.69230769 L59.6826424,1.28209564" />
              <path d="M68.0040377,8.67362413 L59.5182652,0.813452374 L68.0040377,8.67362413 Z" />
              <path d="M68.3461538,8.69230769 L76.6826424,1.28209564" />
              <path d="M84.916959,8.67362413 L76.4311865,0.813452374 L84.916959,8.67362413 Z" />
            </g>
          </g>
        </g>
      </svg>
    );
  }
}
