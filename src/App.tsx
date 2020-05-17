import React, { useState } from 'react';
import './App.css';

import AddPage from './AddPage';
import SubtractPage from './SubtractPage';

enum Page {
  Nav,
  Add,
  AddDynamic,
  Subtract,
  SubtractDynamic,
}

interface LinkButtonProps {
  title: string;
  description: string;
  onClick: () => void;
}

function LinkButton(props: LinkButtonProps) {
  return (
    <button style={{ margin: 10, width: 300 }} onClick={props.onClick}>
      <div
        style={{
          alignItems: 'start',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontWeight: 'bold' }}>{props.title}</div>
        <span>{props.description}</span>
      </div>
    </button>
  );
}

function contentForPage(
  page: Page,
  setPage: React.Dispatch<React.SetStateAction<Page>>
) {
  switch (page) {
    case Page.Nav:
      return (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <LinkButton
            title="Static Addition"
            description="Addition with NO carrying / exchanges"
            onClick={() => setPage(Page.Add)}
          />
          <LinkButton
            title="Dynamic Addition"
            description="Addition with carrying / exchanges"
            onClick={() => setPage(Page.AddDynamic)}
          />
          <LinkButton
            title="Static Subtraction"
            description="Subtraction with NO borrowing / exchanges"
            onClick={() => setPage(Page.Subtract)}
          />
          <LinkButton
            title="Dynamic Subtraction"
            description="Subtraction with borrowing / exchanges"
            onClick={() => setPage(Page.SubtractDynamic)}
          />
        </div>
      );
    case Page.Add:
      return (
        <React.Fragment>
          <AddPage />
          <AddPage />
          <AddPage />
        </React.Fragment>
      );
    case Page.AddDynamic:
      return (
        <React.Fragment>
          <AddPage dynamic />
          <AddPage dynamic />
          <AddPage dynamic />
        </React.Fragment>
      );

    case Page.Subtract:
      return (
        <React.Fragment>
          <SubtractPage />
          <SubtractPage />
          <SubtractPage />
        </React.Fragment>
      );

    case Page.SubtractDynamic:
      return (
        <React.Fragment>
          <SubtractPage dynamic />
          <SubtractPage dynamic />
          <SubtractPage dynamic />
        </React.Fragment>
      );
  }
}

function App() {
  const [page, setPage] = useState(Page.Nav);
  const content = contentForPage(page, setPage);
  return <div className="App">{content}</div>;
}

export default App;
