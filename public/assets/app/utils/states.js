var
	_missing 		= require("./states/_missing"),
	_db 			= require("./states/_db"),
	_auth 			= require("./states/_db-auth"),
	_guest 			= require("./states/_db-guest"),
	_main 			= require("./states/_main"),

	/**
	 * main.home
	 */
	home 			= require("./states/main/home"),

	/**
	 * main.university-profile
	 */
	profile			= require("./states/main/university-profile"),
	dev_thrust	 	= require("./states/main/university-profile/developmental-thrust"),
	geo_history		= require("./states/main/university-profile/geographical-history"),
	history 		= require("./states/main/university-profile/history"),
	hymn 			= require("./states/main/university-profile/hymn"),
	link_net		= require("./states/main/university-profile/linkages-networks"),
	memberships		= require("./states/main/university-profile/memberships"),
	milestone		= require("./states/main/university-profile/milestone-events"),
	mis_vi_sion 	= require("./states/main/university-profile/mission-vision"),
	philosophy		= require("./states/main/university-profile/philosophy"),
	seal_colors 	= require("./states/main/university-profile/seal-and-colors"),
	univ_charter 	= require("./states/main/university-profile/university-charter"),


	media			= require("./states/main/media"),
	admission		= require("./states/main/admission"),
	career			= require("./states/main/career");