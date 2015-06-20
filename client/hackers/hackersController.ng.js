angular.module('HackSmart').controller('hackersController', function($meteor, $scope) {

	this.hackerList = $meteor.collection(Hackers);
	$meteor.session('newHacker').bind($scope, 'newHacker');
	this.addNewHacker = function(keypressEvent) {
		if((keypressEvent && keypressEvent.which == 13) || !keypressEvent) {
			this.hackerList.push(this.newHacker);
			this.newHacker = null;
		}
	};

	this.teamsList = $meteor.collection(Teams);
	$meteor.session('newTeam').bind($scope, 'newTeam');
	this.addNewTeam = function(keypressEvent) {
		if((keypressEvent && keypressEvent.which == 13) || !keypressEvent) {
			this.teamsList.push(this.newTeam);
			this.newTeam = null;
		}
	};

	this.updates = $meteor.collection(Updates);
	this.startEditingNewUpdate = function() {
		this.newUpdate = {title: '', content: '', time: new Date(), comments: []};
	};
	this.addNewUpdate = function() {
		this.updates.push(this.newUpdate);
		this.newUpdate = null;
	}

	this.timeFromNow = function(time) {
		return moment(time).fromNow();
	}

	this.newComment = null;
	this.showComments = false;
});