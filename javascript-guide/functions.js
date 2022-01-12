var addPerson = function(name) {
	return {
		setName: function(newName) {
			name = newName;
		},

		getName: function() {
			return name;
		}
	}
}

var person = 
