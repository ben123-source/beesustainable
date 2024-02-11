import Navbar from "./Navbar";
import React from "react";
const Tracker = () => {
	return (
		<div className="flex flex-col  bg-[#F4B04E] min-h-screen">
			<Navbar />
			<div class="flex grow basis-full px-28 py-12 justify-between gap-20 ">
				<div class="basis-4/5 flex flex-col gap-5 text-center ">
					<div class="px-40 self-start bg-white grow-1 basis-14 border-[#64422F] border-8 rounded-lg">
						<div>title</div>
					</div>
					<div class="bg-white grow basis-96 border-[#64422F] border-8 rounded-lg">
						map
					</div>
				</div>
				<div class="bg-white basis-1/4 text-center block border-[#64422F] border-8 rounded-lg">
					data dashboard
				</div>
			</div>
		</div>
	);
};

export default Tracker;
