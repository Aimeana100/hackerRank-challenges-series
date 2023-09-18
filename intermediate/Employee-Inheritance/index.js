
function Employee(title) {
    this.title = title;

    this.setTitle = function (title) {
        this.title = title;
    }

    this.getTitle = function () {
        return this.title;
    }
}

function Engineer(title, isManager) {
    Employee.call(this, title);
    this.isManager = isManager;
    
    this.prototype = Object.create(Employee.prototype);
    this.prototype.constructor = this;

}

Engineer.prototype.setIsManager = function (isManager) {
    this.isManager = isManager;
};

Engineer.prototype.getIsManager = function () {
    return this.isManager;
};
