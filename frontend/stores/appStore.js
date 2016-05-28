var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var AppConstants = require('../constants/appConstants');

var AppStore = new Store(AppDispatcher);

var _currentPage = 0;
var reportInfo = {};

AppStore.currentPage = function () {
  return _currentPage;
};

AppStore.updateReportInfo = function (info) {
  reportInfo = info;
};

AppStore.getReportInfo = function () {
  return $.extend(true, {}, reportInfo);
};

AppStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case AppConstants.NEXT_PAGE:
      _currentPage = payload.page;
      this.__emitChange();
      break;
    case AppConstants.REPORT_INFO:
      this.updateReportInfo(payload.info);
      this.__emitChange();
      }
};

module.exports = AppStore;
