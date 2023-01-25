import ProfileIcon from "../../assets/icons/profileIcon";
import CohortIconFill from "../../assets/icons/cohortIcon-fill";
import AddIcon from "../../assets/icons/addIcon";
import DeleteIcon from "../../assets/icons/deleteIcon";
import SquareBracketsIcon from "../../assets/icons/squareBracketsIcon";
import ArrowRightIcon from "../../assets/icons/arrowRightIcon";
import MonitorIcon from "../../assets/icons/monitorIcon";
import DataIcon from "../../assets/icons/dataIcon";
import "./menu.css";

const Menu = () => {
	return (
		<div className="menu">
			<ul>
				<li>
					<a href="#nogo">
						<ProfileIcon />
						<p>Profile</p>
					</a>
				</li>
				<li>
					<a href="#nogo">
						<AddIcon />
						<p>Add note</p>
					</a>
				</li>
				<li>
					<a href="#nogo">
						<CohortIconFill />
						<p>Move to cohort</p>
						<ArrowRightIcon />
					</a>
					<ul>
						<li>
							<a href="#nogo">
								<SquareBracketsIcon />
								<p>Software Development</p>
								<ArrowRightIcon />
							</a>
							<ul>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 1</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 2</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 3</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 4</p>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#nogo">
								<MonitorIcon />
								<p>Front-End Development</p>
								<ArrowRightIcon />
							</a>
							<ul>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 1</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 2</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 3</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 4</p>
									</a>
								</li>
							</ul>
						</li>
						<li>
							<a href="#nogo">
								<DataIcon />
								<p>Data Analytics</p>
								<ArrowRightIcon />
							</a>
							<ul>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 1</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 2</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 3</p>
									</a>
								</li>
								<li>
									<a href="#nogo">
										<SquareBracketsIcon />
										<p>Cohort 4</p>
									</a>
								</li>
							</ul>
						</li>
					</ul>
				</li>
				<li>
					<a href="#nogo">
						<DeleteIcon />
						<p>Delete student</p>
					</a>
				</li>
			</ul>
		</div>
	);
};

export default Menu;
