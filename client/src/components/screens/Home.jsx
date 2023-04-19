import React from 'react';

const Home = () => {
  return (
	<div className="flex items-center justify-center relative bg-cover bg-no-repeat bg-center h-[700px] w-full bg-[url('/public/webshop-bg3.jpg')]">
		<div className="absolute top-0 left-0 bg-[rgba(31,44,108,.65)] w-full h-full">
			<div className="header-text text-center mt-[250px]">
				<h2 className="text-white text-5xl font-bold leading-1.5">
					Üdvözöllek a Webáruházunkban!
				</h2>
				<p className="text-white text-2xl font-semibold my-10 tracking-wide">
					Nézd meg a termékeinket a Termékek menüpontban.
				</p>
			</div>
		</div>		
  </div>
  );
};

export default Home;