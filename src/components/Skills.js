import React from 'react';
import styled from 'styled-components';

const Section = styled.section``;

const Title = styled.h2`
  margin:0 0 2rem; font-size: clamp(1.9rem, 4.5vw, 2.6rem);
`;

const SubHeading = styled.h3`
  margin:0 0 1rem; font-size:1rem; text-transform:uppercase; letter-spacing:.6px; color:#222; font-weight:700;
`;

const Groups = styled.div`
  display:grid;
  gap:2.75rem;
  grid-template-columns:1fr;
`;

const PillWrap = styled.div`
  display:flex; flex-wrap:wrap; gap:.65rem;
`;

const Pill = styled.span`
  display:inline-flex; align-items:center;
  padding:.65rem 1.05rem; font-size:0.9rem; font-weight:600; letter-spacing:.6px; border:1px solid #d0d0d0; border-radius:999px; background:#fff; color:#111; box-shadow:0 3px 6px rgba(0,0,0,.06);
  line-height:1; transition: transform .25s, box-shadow .25s;
  &:hover{ transform:translateY(-2px); box-shadow:0 6px 14px -4px rgba(0,0,0,.12); }
`;


function Skills({ id }){

  const data_analytics_software_dev_skills = [
    'Python',
    'MATLAB',
    'Java',
    'React',
    'Machine Learning algorithms',
    'Optimization methods',
    'Looker Studio',
    'Google Cloud Platform',
    'SQL databases'
  ];

  const power_systems_skills = [
    'Power flow analysis',
    'Transient  analysis',
    'Power Generation Protection systems',
    'Electrical metering management',
    'Electricity markets',
    'Renewable energy integration',
    'Battery energy storage systems',
    'Short circuit studies',
    'Transmission lines parameters'
  ];

  const software_skills = [
    'PowerWorld Simulator',
    'DIgSILENT PowerFactory',
    'PSS/E',
    'Simulink',
    'AutoCAD 2D'
  ];



  return (
    <Section id={id}>
      <Title>Technologies & Skills</Title>
      <Groups>
        <div>
          <SubHeading>Data Analytics and Software Development</SubHeading>
          <PillWrap>
            {data_analytics_software_dev_skills.map(s => <Pill key={s}>{s}</Pill>)}
          </PillWrap>
        </div>
        <div>
          <SubHeading>Electrical Engineering skills</SubHeading>
          <PillWrap>
            {power_systems_skills.map(s => <Pill key={s}>{s}</Pill>)}
          </PillWrap>
        </div>
        <div>
          <SubHeading>Use of software:</SubHeading>
          <PillWrap>
            {software_skills.map(s => <Pill key={s}>{s}</Pill>)}
          </PillWrap>
        </div>
      </Groups>
    </Section>
  );
}

export default Skills;
