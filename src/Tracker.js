import Navbar from "./Navbar";
import UserInputForm from "./UserInputForm";
import React from "react";
const Tracker = () => {
	
	return (
		<div className="flex flex-col  bg-[#F4B04E] min-h-screen">
			<Navbar />
			<div class="flex grow basis-full px-28 py-12 justify-between gap-20 font-lucida">
				<div class="basis-4/5 flex flex-col gap-5 text-center ">
					<div class="px-40 self-start bg-white grow-1 basis-14 border-[#64422F] border-8 rounded-lg drop-shadow-xl flex">
						<div class="justify-center self-center">location title</div>
					</div>
					<div class="flex bg-white grow basis-96 border-[#64422F] border-8 rounded-lg drop-shadow-xl justify-center">
						<div class="self-center grow">map content</div>
					</div>
				</div>
				<div class="flex bg-white basis-1/4 text-center block border-[#64422F] border-8 rounded-lg drop-shadow-xl">
					<div class="block p-3 self-center min-h-full min-w-full overflow-y-scroll">
						{" "}
						<UserInputForm />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Tracker;
