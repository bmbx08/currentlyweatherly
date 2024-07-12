import React from 'react'
import Container from 'react-bootstrap/Container';

const ResultTextSection = ({selectedCity}) => {
  return (
    <div>
      <div>
      <div className="text-middle">Weather Results for..</div>
      <div className="result-city text-middle">{selectedCity}</div>
      </div>
    </div>
  )
}

export default ResultTextSection
