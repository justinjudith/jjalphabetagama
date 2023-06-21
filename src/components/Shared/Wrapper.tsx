import React from 'react';

interface Props {
  id?: string;
  style?: string;
  children: React.ReactNode;
}

function Wrapper({ id, style, children }: Props) {
  return (
    <section id={id} className={style}>
      <div className="w-full h-full max-w-[1080px] mx-auto relative">
        {children}
      </div>
    </section>
  );
}

export default Wrapper;
