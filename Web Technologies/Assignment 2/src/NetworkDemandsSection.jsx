//Note that the original website with the same link has changed between Assignment 1 and Assignment 2
//This code follows the pattern of the page made in assignment 1
import React from 'react';

function NetworkDemandsSection() {
  return (
    <div>
      <div className="row">
        <div className="offset-1 col-7">
          <h1>Meeting the network demands of 2030</h1>
          <p>
            Networks are at the heart of realizing the tremendous potential that
            emerging technologies can offer humanity in 2030. Tomorrow's
            networks will sense, think and act, leveraging ubiquitous Al and
            providing vast capacity and scale to meet massive new digital
            demands with the lowest possible operating costs. Profound
            improvements will be required unprecedented performance while
            interworking between the human, physical and digital worlds.
          </p>
          <p>Networks must evolve in nine key capability areas.</p>
          <img
            src="/vision-landing-page-diagram-networks-must-evolve-no-sub.png"
            alt=""
            className="col-9"
          />
        </div>
      </div>
      <div className="row">
        <div className="offset-1 col-7">
          <h1 style={{ fontSize: '50px' }}>Network wide AI</h1>
          <p style={{ fontSize: '18px' }}>
            The ubiquitous integration of AI and ML will enable the network of
            2030 to be truly transformational, delivering:
          </p>
          <ul style={{ fontSize: '18px' }}>
            <li>Network-wide, real-time performance Optimization</li>
            <li>Intent-based orchestration and zero-touch automation</li>
            <li>Customer and service experience analytics and assurance</li>
            <li>Automated security, privacy and energy optimization</li>
            <li>Network-wide ML inference and training environments</li>
            <li>Federated, secure data sharing</li>
            <li>Sandboxing and simulation via network digital twins</li>
            <li>
              Co-pilots and virtual assistants for coders, customers, and
              operations
            </li>
          </ul>
          <p style={{ fontSize: '18px' }}>
            The network of 2030 will incorporate a wide range of AI and ML
            capabilities, including network-wide AI management and orchestration
            of AI-native network operations that allow it to act autonomously in
            real-time to address needs and events. Many network functions have
            progressed from simple algorithms and processes to highly automated,
            closed-loop processes and agents for network optimization,
            efficiency, and security. Automation includes interaction between
            network AI models and corresponding AI models in external
            applications and devices. Efficiency, sustainability, security, and
            user experience will be top priorities. A holistic and systematic
            AI/ML data strategy that addresses data ownership, quality, and
            lifecycle management will be essential to the realization of
            network-wide AI.
          </p>
        </div>

        <div className="col-4 text-end">
          <img src="/Drone-sunset-700.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default NetworkDemandsSection;
