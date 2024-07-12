import { useState } from "react";
import { HiSupport, HiOutlineArrowSmRight, HiMenu } from "react-icons/hi";
const menu = [
	{
		name: "Noticias",
		path: "/noticias",
	},
	{
		name: "Competencias",
		path: "/competencias",
		subMenu: [
			{
				name: "Ligas",
				path: "/competencias/ligas",
			},
			{
				name: "Torneos",
				path: "/competencias/torneos",
			},
		],
	},
	{
		name: "Freestylers",
		path: "/freestylers",
	},
	{
		name: "Ranking",
		path: "/ranking",
	},
];

export default function Nav() {
	const [isHiddenMenu, setHiddeMenu] = useState(true);
	const toggleHiddeMenu = () => {
		setHiddeMenu(!isHiddenMenu);
	};
	return (
		<>
			<div className="mt-6 mx-6 w-full flex flex-wrap justify-between items-center">
				<div className="px-6 lg:px-8 py-4 lg:py-4 w-full flex justify-between items-center bg-gray-900 rounded-full">
					<div className="flex justify-start items-center  gap-2 lg:gap-6">
						<HiSupport className="w-8 lg:w-12 h-8 lg:h-12 text-main-500" />
						<h1 className="font-nun font-bold text-xl lg:text-4xl">
							FactorFree
						</h1>
					</div>
					<HiMenu
						onClick={toggleHiddeMenu}
						className={
							"lg:hidden w-8 h-8 text-main-500 transition-all duration-300 ease-out " +
							(isHiddenMenu ? "" : "-rotate-90" )
						}
					/>
					<ul className="hidden lg:flex justify-center items-center lg:gap-12 xl:gap-16 transition-all duration-150 ease-out">
						{menu.map((item) => (
							<li className="font-nun lg:text-lg 2xl:text-2xl" key={item.name}>
								<a href={item.path}>{item.name}</a>
							</li>
						))}
					</ul>
					<div className="hidden lg:flex justify-center items-center gap-6">
						<span className="hidden xl:inline px-6 py-3 lg:text-sm xl:text-lg 2xl:text-2xl text-center bg-gray-800 rounded-full">
							Únete a la comunidad
						</span>
						<div className="lg:w-8 xl:w-12 2xl:w-16 lg:h-8 xl:h-12 2xl:h-16 flex justify-center items-center bg-main-500 rounded-full">
							<HiOutlineArrowSmRight className="w-12 h-12 text-gray-900 stroke-[0.2rem] -rotate-45" />
						</div>
					</div>
				</div>
				<div className={"mt-4 w-full flex flex-wrap flex-col justify-between items-start bg-gray-900 rounded-[1rem] " + (isHiddenMenu ? "hidden" : "")}>
					<ul className="px-8 py-6 w-full flex flex-wrap flex-col justify-start items-start gap-6">
						{menu.map((item) => (
							<li className="font-nun text-2xl " key={item.name}>
								<a href={item.path} className="hover:text-main-500">
									{item.name}
								</a>
							</li>
						))}
					</ul>
					<div className="px-4 py-4 mt-6 w-full flex justify-end items-center gap-6">
						<span className="px-6 py-3 text-sm bg-gray-800 rounded-full">
							Únete a la comunidad
						</span>
						<div className=" w-9 h-9 flex justify-center items-center bg-main-500 rounded-full">
							<HiOutlineArrowSmRight className="w-12 h-12 text-gray-900 stroke-[0.2rem] -rotate-45" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
