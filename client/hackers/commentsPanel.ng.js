angular.module('HackSmart').directive('commentsPanel', function () {
	return {
		controller: function($scope) {
			this.timeFromNow = function(time) {
				return moment(time).fromNow();
			}

			this.newComment = null;
			this.showComments = false;
		},
		scope: {
			comments: '='
		},
		controllerAs: 'hackers',
		templateUrl: 'client/hackers/commentsPanel.ng.html'
	};
});