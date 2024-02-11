import Navbar from "./Navbar";
import React from "react";
const Tracker = () => {
	return (
		<div className="bg-[#F4B04E] min-h-screen">
			<Navbar />
			<div class="">
				<div class="flex px-28 py-12 justify-between gap-20 content-center">
					<div class="basis-4/5 flex flex-col gap-5 text-center">
						<div class="px-40 self-start bg-white grow-1 basis-14">
							<div>word</div>
						</div>
						<div class="bg-white grow-4 basis-96">word</div>
					</div>
					<div class="bg-white basis-1/4 text-center block"></div>
				</div>
			</div>
		</div>
	);
};

export default Tracker;
